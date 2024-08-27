import './header.scss'

import { Link } from 'react-router-dom'

import RegularButton from '../../atoms/buttons/regularButton/regularButton'
import RoundButton from '../../atoms/buttons/roundButton/roundButton'
import GlobalSearch from '../../molecules/globalSearch/globalSearch'

import logo from '../../assets/icons/logo.png'
import english from '../../assets/icons/english.png'
import dark from '../../assets/icons/dark.png'
import light from '../../assets/icons/light.png'
import profile from '../../assets/icons/profile.png'
import cart from '../../assets/icons/cart.png'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { toggleTheme } from '../../store/reducers/themeSlice'

const Header = () => {
	const dispatch = useAppDispatch()

	const { theme } = useAppSelector((state) => state.themeReducer)

	return (
		<header className='header'>
			<div className='header__container container'>
				<Link to='/'>
					<img className='header__logo' src={logo} alt='logo' />
				</Link>
				<Link to='/catalog'>
					<RegularButton>Каталог</RegularButton>
				</Link>
				<div className='header__input-box'>
					<GlobalSearch />
				</div>
				<div className='header__buttons'>
					<RoundButton className='header__button'>
						<img src={english} alt='language' />
					</RoundButton>
					<RoundButton
						className='header__button'
						onClick={() => dispatch(toggleTheme())}>
						<img src={theme === 'dark' ? light : dark} alt='theme' />
					</RoundButton>
					<Link to='/authorization' className='header__button'>
						<RoundButton>
							<img src={profile} alt='profile' />
						</RoundButton>
					</Link>
					<RoundButton className='header__button'>
						<img src={cart} alt='cart' />
					</RoundButton>
				</div>
			</div>
		</header>
	)
}

export default Header
