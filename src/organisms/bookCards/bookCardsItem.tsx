import './bookCardsItem.scss'

import ImportantButton from '../../atoms/buttons/importantButton/importantButton'
import RoundButton from '../../atoms/buttons/roundButton/roundButton'

import book from '../../assets/imgs/book.png'
import bookmark from '../../assets/icons/bookmark.png'

const BookCardsItem = () => {
	return (
		<div className='book-card-item'>
			<img src={book} alt='книга' />
			<div className='book-card-item__info'>
				<h2 className='book-card-item__title title-text'>Название книги которая здесь показана</h2>
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
