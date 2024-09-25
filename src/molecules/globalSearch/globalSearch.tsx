import './globalSearch.scss'

import { api } from '../../services/bookServices'

import { useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import {
	setSearchTitle,
	setSuggestShow,
} from '../../store/reducers/searchSlice'
import { deleteComments } from '../../store/reducers/bookSlice'

import GlobalInput from '../../atoms/inputs/globalInput/globalInput'
import Spinner from '../../atoms/loaders/spinner/spinner'

import { useNavigate, useParams } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

const GlobalSearch = () => {
	const dispatch = useAppDispatch()

	const { searchTitle, suggestShow } = useAppSelector(
		(state) => state.searchReducer
	)

	const {
		data: books,
		error,
		isLoading,
		isFetching,
	} = api.useGetSearchBookByTitleQuery(searchTitle)

	const handleInputClick = () => {
		dispatch(setSuggestShow(true))
	}

	const handleOutsideClick = (event: MouseEvent) => {
		if (
			event.target instanceof HTMLElement &&
			!event.target.closest('.header__input-box')
		) {
			dispatch(setSuggestShow(false))
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick)
		return () => {
			document.removeEventListener('click', handleOutsideClick)
		}
	}, [])

	const navigate = useNavigate()
	const { id: currentId } = useParams()

	const { t } = useTranslation()

	return (
		<>
			<GlobalInput
				className={`header__input ${suggestShow ? 'header__input_active' : ''}`}
				placeholder={t('globalSearch.placeholder')}
				value={searchTitle}
				onChange={(e) => {
					if (e.target.value.length > 2) {
						dispatch(setSearchTitle(e.target.value))
					} else {
						dispatch(setSearchTitle(''))
					}
				}}
				onClick={handleInputClick}
			/>
			{suggestShow &&
				books &&
				books?.length > 0 &&
				searchTitle &&
				!isLoading &&
				!isFetching && (
					<ul className='header__suggest suggest__list'>
						{books?.map((book) => (
							<li
								onClick={() => {
									navigate(`/catalog/${book.id}`)
									if (book.id !== Number(currentId)) {
										dispatch(deleteComments())
									}
								}}
								className='suggest__item suggest__item_link description-text'
								key={book.id}>
								{`${book.id} ${book.title}`}
							</li>
						))}
					</ul>
				)}
			{suggestShow && books?.length === 0 && (
				<ul className='header__suggest suggest__list'>
					<li className='suggest__item description-text'>
						{t('global.notFound')}
					</li>
				</ul>
			)}
			{suggestShow && isLoading && (
				<ul className='header__suggest suggest__list'>
					<li className='suggest__item description-text'>
						<Spinner />
					</li>
				</ul>
			)}
			{suggestShow && isFetching && !isLoading && (
				<ul className='header__suggest suggest__list'>
					<li className='suggest__item description-text'>
						<Spinner />
					</li>
				</ul>
			)}
			{suggestShow && error && (
				<ul className='header__suggest suggest__list'>
					<li className='suggest__item error-text'>
						{t('global.error')}
					</li>
				</ul>
			)}
		</>
	)
}

export default GlobalSearch
