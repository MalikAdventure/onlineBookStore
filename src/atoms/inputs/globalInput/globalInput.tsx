import classes from './globalInput.module.scss'

//! не работает

const GlobalInput = ({ ...props }) => {
	return (
		// <input {...props} className={`${classes.globalInput} ${props.className}`} />
		<input
			type='text'
			className={`${classes.globalInput} ${props.className}`}
		/>
	)
}

export default GlobalInput
