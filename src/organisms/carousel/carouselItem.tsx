import './carouselItem.scss'

import { FC } from 'react'
import { IBook } from '../../models/IBook'

import { useNavigate } from 'react-router-dom'

import bookImg from '../../assets/imgs/book.png'

interface IBookCarouselItem {
	book: IBook
}

const CarouselItem: FC<IBookCarouselItem> = ({ book }) => {
	const navigate = useNavigate()

	const toDetailedPage = () => {
		navigate(`/catalog/${book.id}`)
	}

	return (
		<div className='carousel__box'>
			<div className='carousel__item'>
				<img
					onClick={toDetailedPage}
					className='carousel__item-img'
					src={bookImg}
					alt='книга'
				/>
			</div>
			<div className='carousel__item'>
				<div onClick={toDetailedPage} className='carousel__item-info'>
					<h3 className='carousel__item-title title-text'>
						{`${book.id} ${book.title}`}
					</h3>
					<p className='carousel__item-text description-text'>{book.body}</p>
				</div>
			</div>
		</div>
	)
}

export default CarouselItem
