import classes from './spinner.module.scss'

import { FC } from 'react'

const Spinner: FC = ({ ...props }) => {
	return (
		<div style={{ width: '100%', height: '140px' }}>
			<div className={`${classes.spinner} ${props.className}`}></div>
		</div>
	)
}

export default Spinner
