import classes from './globalInput.module.scss'

const GlobalInput = ({ placeholder, ...props }) => {
	return (
		<input
			type='text'
			placeholder={placeholder}
			className={`${classes.globalInput} ${props.className} description-text`}
		/>
	)
}

export default GlobalInput
