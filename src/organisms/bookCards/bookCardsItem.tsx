import './bookCardsItem.scss'

import { FC } from 'react'

import { IBook } from '../../models/IBook'

import ImportantButton from '../../atoms/buttons/importantButton/importantButton'
import RoundButton from '../../atoms/buttons/roundButton/roundButton'

import bookImg from '../../assets/imgs/book.png'
import bookmark from '../../assets/icons/bookmark.png'

interface IBookCardsItem {
	book: IBook
}

const BookCardsItem: FC<IBookCardsItem> = ({ book }) => {
	return (
		<div className='book-card-item'>
			<img src={bookImg} alt='книга' />
			<div className='book-card-item__info'>
				<h2 className='book-card-item__title title-text'>
					{`${book.id} ${book.title.slice(0, 40)}...`}
				</h2>
				<p className='book-card-item__price link-text'>20 000 000 рублей</p>
			</div>
			<div className='book-card-item__buttons'>
				<ImportantButton className='book-card-item__button'>
					Купить
				</ImportantButton>
				<RoundButton>
					<img src={bookmark} alt='закладка' />
				</RoundButton>
			</div>
		</div>
	)
}

export default BookCardsItem
