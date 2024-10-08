import './bookDetailed.scss'

import { FC } from 'react'
import { IBook } from '../../models/IBook'
import { IComments } from '../../models/IComments'

import axios from 'axios'

import { api } from '../../services/bookServices'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'

import { useParams } from 'react-router-dom'

import Spinner from '../../atoms/loaders/spinner/spinner'
import ImportantButton from '../../atoms/buttons/importantButton/importantButton'

import { getPageCount } from '../../utils/pagePagination/pagePagination'

import {
	setTotalPages,
	loadMore,
	setComments,
	deleteComments,
} from '../../store/reducers/bookSlice'

import bookImg from '../../assets/imgs/book.png'

import BookButtons from '../../molecules/bookButtons/bookButtons'

import { useEffect } from 'react'

import { useTranslation } from 'react-i18next'

const BookDetailed: FC = () => {
	const params = useParams()

	const dispatch = useAppDispatch()
	const { page, totalPages } = useAppSelector((state) => state.bookReducer)

	const limit = 2

	axios
		.head(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`, {
			params: { _limit: limit },
		})
		.then((response) => {
			const totalCount = response.headers['x-total-count']
			const totalPages = getPageCount(totalCount, limit)
			if (books) {
				dispatch(setTotalPages(totalPages))
			}
		})

	const {
		data: books,
		isLoading,
		isFetching,
		error,
	} = api.useGetBookByIdQuery(Number(params.id))

	const {
		data: comments,
		isLoading: isLoadingComments,
		isFetching: isFetchingComments,
		error: errorComments,
	} = api.useGetCommentsBookByIdQuery({
		limit,
		page,
		id: Number(params.id),
	})

	useEffect(() => {
		if (comments) {
			dispatch(setComments(comments))
		}
	}, [comments, dispatch])

	useEffect(() => {
		return () => {
			dispatch(deleteComments())
		}
	}, [])

	const { allComments } = useAppSelector((state) => state.bookReducer)

	const { t } = useTranslation()

	return (
		<section className='book-detailed section'>
			<div className='book-detailed__container container'>
				<div className='book-detailed__book'>
					{books &&
						!isLoading &&
						!isFetching &&
						books.map((book: IBook) => (
							<div key={book.id} className='book-detailed__book-box'>
								<div className='book-detailed__book-item'>
									<img src={bookImg} alt='книга' />
								</div>
								<div className='book-detailed__book-item'>
									<h1 className='book-detailed__book-title title-text'>{`${book.id} ${book.title}`}</h1>
									<p className='book-detailed__book-text description-text'>
										{book.body}
									</p>
								</div>
								<div className='book-detailed__book-item'>
									<div className='book-detailed__book-info'>
										<p className='book-detailed__book-info-text link-text'>
											20 000 000 {t('global.rubles')}
										</p>
										<p className='book-detailed__book-info-text link-text'>
											{t('bookDetailed.inStock')}
										</p>
										<BookButtons bookId={book.id} />
									</div>
								</div>
							</div>
						))}
					{books?.length === 0 && (
						<h2 className='book-detailed__text link-text'>
							{t('global.notFound')}
						</h2>
					)}
					{error && (
						<h2 className='book-detailed__text error-text'>
							{t('global.error')}
						</h2>
					)}
					{isLoading && <Spinner />}
					{isFetching && !isLoading && <Spinner />}
				</div>
				<div className='book-detailed__comment'>
					<h2 className='book-detailed__comment-topic topic-text'>
						{t('bookDetailed.title')}
					</h2>
					{allComments &&
						allComments.map((comment: IComments) => (
							<div key={comment.id} className='book-detailed__comment-box'>
								<h3 className='book-detailed__comment-text title-text'>{`${comment.id} ${comment.email}`}</h3>
								<h4 className='book-detailed__comment-text title-text'>
									{comment.name}
								</h4>
								<p className='book-detailed__comment-text description-text'>
									{comment.body}
								</p>
							</div>
						))}
					{allComments?.length === 0 &&
						!isLoadingComments &&
						!isFetchingComments && (
							<h2 className='book-detailed__text link-text'>
								{t('global.notFound')}
							</h2>
						)}
					{isLoadingComments && <Spinner />}
					{isFetchingComments && !isLoadingComments && <Spinner />}
					{errorComments && (
						<h2 className='book-detailed__text error-text'>
							{t('global.error')}
						</h2>
					)}
					{page < totalPages && !isFetchingComments && (
						<ImportantButton
							onClick={() => dispatch(loadMore(1))}
							className='book-detailed__comment-button'>
							{t('bookDetailed.seeMore')}
						</ImportantButton>
					)}
				</div>
			</div>
		</section>
	)
}

export default BookDetailed
