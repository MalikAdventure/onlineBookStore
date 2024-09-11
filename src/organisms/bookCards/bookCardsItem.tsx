import './bookCardsItem.scss'

import { FC } from 'react'
import { IBook } from '../../models/IBook'

import { useNavigate } from 'react-router-dom'

import BookButtons from '../../molecules/bookButtons/bookButtons'

import bookImg from '../../assets/imgs/book.png'

interface IBookCardsItem {
	book: IBook
}

const BookCardsItem: FC<IBookCardsItem> = ({ book }) => {
	const navigate = useNavigate()

	const toDetailedPage = () => {
		navigate(`/catalog/${book.id}`)
	}

	return (
		<li className='book-card-item'>
			<div onClick={toDetailedPage} className='book-card-item__info'>
				<img src={bookImg} alt='книга' />
				<h2 className='book-card-item__title title-text'>
					{`${book.id} ${book.title.slice(0, 40)}...`}
				</h2>
			</div>
			<p className='book-card-item__price link-text'>20 000 000 рублей</p>
			<BookButtons bookId={book.id} />
		</li>
	)
}

export default BookCardsItem
