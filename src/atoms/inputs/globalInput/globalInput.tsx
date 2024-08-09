import classes from './globalInput.module.scss'

import { FC } from 'react'

const GlobalInput: FC = ({ placeholder, ...props }) => {
	return (
		<input
			type='text'
			placeholder={placeholder}
			className={`${classes.globalInput} ${props.className} description-text`}
		/>
	)
}

export default GlobalInput
