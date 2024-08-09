import classes from './spinner.module.scss'

import { FC } from 'react'

const Spinner: FC = ({ ...props }) => {
	return (
		<>
			<div className={`${classes.spinner} ${props.className}`}></div>
		</>
	)
}

export default Spinner
