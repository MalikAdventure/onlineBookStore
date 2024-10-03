import classes from './roundButton.module.scss'

import { FC } from 'react'

interface interfaceRoundButton {
	children: React.ReactNode
	className?: string
	onClick?: () => void
	style?: React.CSSProperties
}

const RoundButton: FC<interfaceRoundButton> = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className={`${classes.roundButton} ${props.className} description-text`}>
			{children}
		</button>
	)
}

export default RoundButton
