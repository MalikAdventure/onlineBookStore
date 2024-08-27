import classes from './globalInput.module.scss'

import { FC } from 'react'

const GlobalInput: FC = ({ placeholder, onChange, onClick, ...props }) => {
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
