import './header.scss'

import { Link } from 'react-router-dom'

import RegularButton from '../../atoms/buttons/regularButton/regularButton'
import RoundButton from '../../atoms/buttons/roundButton/roundButton'
import GlobalInput from '../../atoms/inputs/globalInput/globalInput'

import logo from '../../assets/icons/logo.png'
import english from '../../assets/icons/english.png'
import dark from '../../assets/icons/dark.png'
import light from '../../assets/icons/light.png'
import profile from '../../assets/icons/profile.png'
import cart from '../../assets/icons/cart.png'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { toggleTheme } from '../../store/reducers/themeSlice'

import { api } from '../../services/bookServices'
import { useState, useEffect } from 'react'

import Spinner from '../../atoms/loaders/spinner/spinner'

import { useNavigate } from 'react-router-dom'

import { deleteComments } from '../../store/reducers/bookSlice'

const Header = () => {
	const dispatch = useAppDispatch()

	const { theme } = useAppSelector((state) => state.themeReducer)

	const [searchTitle, setSearchTitle] = useState('')
	const {
		data: books,
		error,
		isLoading,
		isFetching,
	} = api.useGetSearchBookByTitleQuery(searchTitle)

	const [suggestShow, setSuggestShow] = useState(false)

	const handleInputClick = () => {
		setSuggestShow(true)
	}

	const handleOutsideClick = (event: MouseEvent) => {
		if (
			event.target instanceof HTMLElement &&
			!event.target.closest('.header__input-box')
		) {
			setSuggestShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick)
		return () => {
			document.removeEventListener('click', handleOutsideClick)
		}
	}, [])

	const navigate = useNavigate()

	return (
		<header className='header'>
			<div className='header__container container'>
				<Link to='/'>
					<img className='header__logo' src={logo} alt='logo' />
				</Link>
				<Link to='/catalog'>
					<RegularButton>Каталог</RegularButton>
				</Link>
				<div className='header__input-box'>
					<GlobalInput
						className={`header__input ${
							suggestShow ? 'header__input_active' : ''
						}`}
						placeholder='Введите больше двух символов'
						value={searchTitle}
						onChange={(e) => {
							if (e.target.value.length > 2) {
								setSearchTitle(e.target.value)
							} else {
								setSearchTitle('')
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
											dispatch(deleteComments())
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
								Книги не найдены
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
								Ошибка: Не удалось получить книги
							</li>
						</ul>
					)}
				</div>
				<div className='header__buttons'>
					<RoundButton className='header__button'>
						<img src={english} alt='language' />
					</RoundButton>
					<RoundButton
						className='header__button'
						onClick={() => dispatch(toggleTheme())}>
						<img src={theme === 'dark' ? light : dark} alt='theme' />
					</RoundButton>
					<Link to='/authorization' className='header__button'>
						<RoundButton>
							<img src={profile} alt='profile' />
						</RoundButton>
					</Link>
					<RoundButton className='header__button'>
						<img src={cart} alt='cart' />
					</RoundButton>
				</div>
			</div>
		</header>
	)
}

export default Header
