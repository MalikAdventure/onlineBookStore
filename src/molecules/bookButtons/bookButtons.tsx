import classes from './bookButtons.module.scss'

import ImportantButton from '../../atoms/buttons/importantButton/importantButton'
import RoundButton from '../../atoms/buttons/roundButton/roundButton'

import bookmark from '../../assets/icons/bookmark.png'

const BookButtons = ({ ...props }) => {
	return (
		<div className={`${classes.bookButtons} ${props.className}`}>
			<ImportantButton className={classes.bookButtons__button}>
				Купить
			</ImportantButton>
			<RoundButton>
				<img src={bookmark} alt='закладка' />
			</RoundButton>
		</div>
	)
}

export default BookButtons
