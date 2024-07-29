import classes from './roundButton.module.scss'

const RoundButton = ({ children, ...props }) => {
	return (
		<button {...props} className={`${classes.roundButton} ${props.className}`}>
			{children}
		</button>
	)
}

export default RoundButton
