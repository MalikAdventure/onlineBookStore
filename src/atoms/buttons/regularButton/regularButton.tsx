import classes from './regularButton.module.scss'

const RegularButton = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className={`${classes.regularButton} ${props.className} description-text`}>
			{children}
		</button>
	)
}

export default RegularButton
