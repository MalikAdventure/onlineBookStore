import './header.scss'

import { Link } from 'react-router-dom'

import RegularButton from '../../atoms/buttons/regularButton/regularButton'
import RoundButton from '../../atoms/buttons/roundButton/roundButton'
import GlobalInput from '../../atoms/inputs/globalInput/globalInput'

import logo from '../../assets/icons/logo.png'
import english from '../../assets/icons/english.png'
import dark from '../../assets/icons/dark.png'
import profile from '../../assets/icons/profile.png'
import cart from '../../assets/icons/cart.png'

const Header = () => {
	return (
		<header className='header'>
			<div className='header__container container'>
				<img className='header__logo' src={logo} alt='logo' />
				<RegularButton>Каталог</RegularButton>
				<GlobalInput placeholder='Введите больше двух символов' />
				<div className='header__buttons'>
					<RoundButton className='header__button'>
						<img src={english} alt='english' />
					</RoundButton>
					<RoundButton className='header__button'>
						<img src={dark} alt='dark' />
					</RoundButton>
					<RoundButton className='header__button'>
						<Link to='/authorization'>
							<img src={profile} alt='profile' />
						</Link>
					</RoundButton>
					<RoundButton className='header__button'>
						<img src={cart} alt='cart' />
					</RoundButton>
				</div>
			</div>
		</header>
	)
}

export default Header
