import './headerMobile.scss'

import RoundButton from '../../atoms/buttons/roundButton/roundButton'

const HeaderMobile = () => {
	return (
		<div className='header-mobile'>
			<div className='header-mobile__container container'>
				<RoundButton className='header-mobile__hamburger'>
					<span></span>
					<span></span>
					<span></span>
				</RoundButton>
			</div>
		</div>
	)
}

export default HeaderMobile
