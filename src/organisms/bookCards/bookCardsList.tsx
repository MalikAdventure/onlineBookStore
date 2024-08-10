import './bookCardsList.scss'

import { api } from '../../services/bookServices'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'

import BookCardsItem from './bookCardsItem'
import Spinner from '../../atoms/loaders/spinner/spinner'
// import ButtonsPagination from '../../molecules/buttonsPagination/buttonsPagination'

import {
	previousPage,
	nextPage,
	increment,
} from '../../store/reducers/bookSlice'

const BookCardsList = () => {
	const dispatch = useAppDispatch()
	const { page, count } = useAppSelector((state) => state.bookReducer)
	console.log('page', page)

	const limit = 24
	const {
		data: books,
		isLoading,
		error,
	} = api.useGetAllBooksQuery({ limit, page })

	return (
		<section className='book-cards-list section'>
			<div className='book-cards-list__container container'>
				<div className='book-cards-list__box'>
					{isLoading && <Spinner />}
					{error && <h2>Ошибка: Не удалось получить посты</h2>}
					{books &&
						books.map((book) => <BookCardsItem key={book.id} book={book} />)}
				</div>
				{/* <ButtonsPagination
					totalPages={totalPages}
					page={page}
					changePage={(pageNum) => dispatch(changePage(pageNum))}
				/> */}
				{/* <button onClick={() => setPage(page - 1)}>Previous</button>
				<button onClick={() => setPage(page + 1)}>Next</button> */}
				<button onClick={() => dispatch(previousPage(1))}>Previous</button>
				<button onClick={() => dispatch(nextPage(1))}>Next</button>
				{count}
				<button onClick={() => dispatch(increment(1))}>increment</button>
			</div>
		</section>
	)
}

export default BookCardsList
