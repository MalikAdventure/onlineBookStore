import classes from './globalInput.module.scss'

import { FC, ChangeEvent, MouseEvent } from 'react'

interface interfaceGlobalInput {
	className?: string
	placeholder?: string
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	onClick?: (event: MouseEvent<HTMLInputElement>) => void
	value?: string
}

const GlobalInput: FC<interfaceGlobalInput> = ({
	placeholder,
	onChange,
	onClick,
	...props
}) => {
	return (
		<input
			type='text'
			placeholder={placeholder}
			onChange={onChange}
			onClick={onClick}
			className={`${classes.globalInput} ${props.className} description-text`}
		/>
	)
}

export default GlobalInput
