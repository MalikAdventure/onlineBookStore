import './bookCardsList.scss'

import { api } from '../../services/bookServices'

import bookSlice from '../../store/reducers/bookSlice'
import { useAppSelector, useAppDispatch } from '../../hooks/redux'

import BookCardsItem from './bookCardsItem'
import Spinner from '../../atoms/loaders/spinner/spinner'
// import ButtonsPagination from '../../molecules/buttonsPagination/buttonsPagination'

import { changePage, increment } from '../../store/reducers/bookSlice'
// import { getPageCount } from '../../utils/pagePagination/pagePagination'

const BookCardsList = () => {
	const limit = 24
	const { data: books, isLoading, error } = api.useGetAllBooksQuery(limit)

	const dispatch = useAppDispatch()

	const { count } = useAppSelector((state) => state.bookReducer)

	return (
		<section className='book-cards-list section'>
			<div className='book-cards-list__container container'>
				{isLoading && <Spinner />}
				{error && <h2>Ошибка: Не удалось получить посты</h2>}
				{books &&
					books.map((book) => <BookCardsItem key={book.id} book={book} />)}
				{/* <ButtonsPagination
					totalPages={totalPages}
					page={page}
					changePage={(pageNum) => dispatch(changePage(pageNum))}
				/> */}
				{count}
				<button onClick={() => dispatch(increment(1))}>increment</button>
			</div>
		</section>
	)
}

export default BookCardsList
