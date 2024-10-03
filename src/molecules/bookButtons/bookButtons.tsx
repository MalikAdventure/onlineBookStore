import './bookButtons.scss'

import { FC } from 'react'

import ImportantButton from '../../atoms/buttons/importantButton/importantButton'
import RoundButton from '../../atoms/buttons/roundButton/roundButton'

import bookmark from '../../assets/icons/bookmark.png'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { setFavorites } from '../../store/reducers/favoritesSlice'
import { setCartGoods } from '../../store/reducers/cartSlice'

import { useTranslation } from 'react-i18next'

interface interfaceBook {
	bookId: number
}

const BookButtons: FC<interfaceBook> = (book) => {
	const dispatch = useAppDispatch()

	const { allFavorites } = useAppSelector((state) => state.favoritesReducer)
	const isFavorite = allFavorites.includes(book.bookId)

	const { t } = useTranslation()

	return (
		<div className='book-buttons'>
			<ImportantButton
				onClick={() => dispatch(setCartGoods({ id: book.bookId, quantity: 1 }))}
				className='book-buttons__button'>
				{t('global.buttonBuy')}
			</ImportantButton>
			<RoundButton onClick={() => dispatch(setFavorites([book.bookId]))}>
				<img
					style={{
						filter: isFavorite
							? 'hue-rotate(120deg) saturate(100%) brightness(100%) contrast(100%)'
							: 'initial',
					}}
					src={bookmark}
					alt='закладка'
				/>
			</RoundButton>
		</div>
	)
}

export default BookButtons
