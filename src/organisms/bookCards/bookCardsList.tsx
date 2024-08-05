import './bookCardsList.scss'

// import { postSlice } from '../../store/reducers/postSlice'
// import { UseDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchPosts } from '../../store/reducers/actionCreators'

import { useEffect } from 'react'

// import BookCardsItem from './bookCardsItem'

const BookCardsList = () => {
	const dispatch = useAppDispatch()
	const { posts, isLoading, error } = useAppSelector(
		(state) => state.postReducer
	)

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	return (
		<section className='book-cards-list section'>
			<div className='book-cards-list__container container'>
				{isLoading && <h2>Загрузка...</h2>}
				{error && <h2>{error}</h2>}
				{JSON.stringify(posts, null, 2)}
				{/* <BookCardsItem />
				<BookCardsItem />
				<BookCardsItem />
				<BookCardsItem />
				<BookCardsItem />
				<BookCardsItem />
				<BookCardsItem />
				<BookCardsItem />
				<BookCardsItem />
				<BookCardsItem />
				<BookCardsItem />
				<BookCardsItem />
				<BookCardsItem />
				<BookCardsItem />
				<BookCardsItem />
				<BookCardsItem /> */}
			</div>
		</section>
	)
}

export default BookCardsList
