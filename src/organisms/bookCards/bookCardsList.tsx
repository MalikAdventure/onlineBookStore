import './bookCardsList.scss'

import { api } from '../../services/bookServices'

import BookCardsItem from './bookCardsItem'

const BookCardsList = () => {
	const { data: posts, isLoading, error } = api.useGetAllPostsQuery(5)

	return (
		<section className='book-cards-list section'>
			<div className='book-cards-list__container container'>
				{isLoading && <h2>Загрузка...</h2>}
				{error && <h2>Ошибка</h2>}
				{posts &&
					posts.map((post) => <BookCardsItem key={post.id} post={post} />)}
			</div>
		</section>
	)
}

export default BookCardsList
