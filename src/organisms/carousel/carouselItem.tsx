import './carouselItem.scss'

import { FC } from 'react'
import { IBook } from '../../models/IBook'

import RegularButton from '../../atoms/buttons/regularButton/regularButton'

import bookImg from '../../assets/imgs/book.png'

interface IBookCarouselItem {
	book: IBook
}

const CarouselItem: FC<IBookCarouselItem> = ({ book }) => {
	return (
		<div className='carousel__box'>
			<div className='carousel__item'>
				<img className='carousel__item-img' src={bookImg} alt='книга' />
			</div>
			<div className='carousel__item'>
				<h3 className='carousel__item-title title-text'>
					{`${book.id} ${book.title}`}
				</h3>
				<p className='carousel__item-text description-text'>{book.body}</p>
				<RegularButton>Купить</RegularButton>
			</div>
		</div>
	)
}

export default CarouselItem
