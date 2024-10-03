import classes from './regularButton.module.scss'

import { FC } from 'react'

interface interfaceRegularButton {
	children: React.ReactNode
	className?: string
	type?: 'button' | 'submit' | 'reset'
}

const RegularButton: FC<interfaceRegularButton> = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className={`${classes.regularButton} ${props.className} description-text`}>
			{children}
		</button>
	)
}

export default RegularButton
