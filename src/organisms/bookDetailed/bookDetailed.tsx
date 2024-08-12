import './bookDetailed.scss'

import { api } from '../../services/bookServices'

import { useParams } from 'react-router-dom'

import Spinner from '../../atoms/loaders/spinner/spinner'

import { IBook } from '../../models/IBook'

import bookImg from '../../assets/imgs/book.png'

import BookButtons from '../../molecules/bookButtons/bookButtons'

const BookDetailed = () => {
	const params = useParams()

	const {
		data: books,
		isLoading,
		error,
	} = api.useGetBookByIdQuery(Number(params.id))

	return (
		<section className='book-detailed section'>
			<div className='book-detailed__container container'>
				{isLoading && <Spinner />}
				{error && <h2>Ошибка: Не удалось получить посты</h2>}
				{books &&
					books.map((book: IBook) => (
						<div key={book.id} className='book-detailed__box'>
							<div className='book-detailed__item'>
								<img src={bookImg} alt='книга' />
							</div>
							<div className='book-detailed__item'>
								<h1 className='book-detailed__title title-text'>{`${book.id} ${book.title}`}</h1>
								<p className='book-detailed__text description-text'>
									{book.body}
								</p>
							</div>
							<div className='book-detailed__item'>
								<div className='book-detailed__info'>
									<p className='book-detailed__info-text link-text'>
										20 000 000 рублей
									</p>
									<p className='book-detailed__info-text link-text'>
										Есть в наличии
									</p>
									<BookButtons />
								</div>
							</div>
						</div>
					))}
			</div>
		</section>
	)
}

export default BookDetailed
