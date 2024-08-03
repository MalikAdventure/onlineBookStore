import classes from './importantButton.module.scss'

const ImportantButton = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className={`${classes.importantButton} ${props.className} description-text`}>
			{children}
		</button>
	)
}

export default ImportantButton
