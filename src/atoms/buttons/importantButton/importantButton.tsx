import classes from './importantButton.module.scss'

const ImportantButton = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className={`${classes.importantButton} ${props.className}`}>
			{children}
		</button>
	)
}

export default ImportantButton
