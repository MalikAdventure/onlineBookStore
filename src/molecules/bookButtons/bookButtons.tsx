import classes from './bookButtons.module.scss'

import ImportantButton from '../../atoms/buttons/importantButton/importantButton'
import RoundButton from '../../atoms/buttons/roundButton/roundButton'

import bookmark from '../../assets/icons/bookmark.png'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { setFavorites } from '../../store/reducers/favoritesSlice'

const BookButtons = ({ ...props }) => {
	const dispatch = useAppDispatch()

	const { allFavorites } = useAppSelector((state) => state.favoritesReducer)
	const isFavorite = allFavorites.includes(props.bookId)

	return (
		<div className={`${classes.bookButtons} ${props.className}`}>
			<ImportantButton className={classes.bookButtons__button}>
				Купить
			</ImportantButton>
			<RoundButton onClick={() => dispatch(setFavorites([props.bookId]))}>
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
