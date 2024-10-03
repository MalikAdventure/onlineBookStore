import classes from './importantButton.module.scss'

import { FC } from 'react'
interface interfaceImportantButton {
	children: React.ReactNode
	className?: string
	onClick?: () => void
}

const ImportantButton: FC<interfaceImportantButton> = ({
	children,
	...props
}) => {
	return (
		<button
			{...props}
			className={`${classes.importantButton} ${props.className} description-text`}>
			{children}
		</button>
	)
}

export default ImportantButton
