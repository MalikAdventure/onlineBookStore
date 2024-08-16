import './bookCardsList.scss'

import axios from 'axios'

import { api } from '../../services/bookServices'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'

import BookCardsItem from './bookCardsItem'
import Spinner from '../../atoms/loaders/spinner/spinner'
import PaginationButtons from '../../molecules/paginationButtons/paginationButtons'

import { getPageCount } from '../../utils/pagePagination/pagePagination'

import { setTotalPages, changePage } from '../../store/reducers/allBooksSlice'

const BookCardsList = () => {
	const dispatch = useAppDispatch()
	const { page, totalPages } = useAppSelector((state) => state.allBooksReducer)

	const limit = 24

	axios
		.head('https://jsonplaceholder.typicode.com/posts', {
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
	} = api.useGetAllBooksQuery({ limit, page })

	return (
		<section className='book-cards-list section'>
			<div className='book-cards-list__container container'>
				<ul className='book-cards-list__box'>
					{books &&
						books.map((book) => <BookCardsItem key={book.id} book={book} />)}
					{books?.length === 0 && (
						<h2 className='book-cards-list__text link-text'>
							Книги не найдены
						</h2>
					)}
					{isLoading && <Spinner />}
					{isFetching && !isLoading && <Spinner />}
					{error && (
						<h2 className='book-cards-list__text error-text'>
							Ошибка: Не удалось получить книги
						</h2>
					)}
				</ul>
				<PaginationButtons
					totalPages={totalPages}
					page={page}
					changePage={(page: number) => dispatch(changePage(page))}
				/>
			</div>
		</section>
	)
}

export default BookCardsList
