import './headerMobile.scss'

import RoundButton from '../../atoms/buttons/roundButton/roundButton'
import RegularButton from '../../atoms/buttons/regularButton/regularButton'
import GlobalSearch from '../../molecules/globalSearch/globalSearch'
import Cart from '../../molecules/cart/cart'

import logo from '../../assets/icons/logo.png'
import english from '../../assets/icons/english.png'
import russian from '../../assets/icons/russian.png'
import dark from '../../assets/icons/dark.png'
import light from '../../assets/icons/light.png'
import profile from '../../assets/icons/profile.png'
import cart from '../../assets/icons/cart.png'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setHamburger } from '../../store/reducers/hamburgerSlice'
import { toggleTheme } from '../../store/reducers/themeSlice'
import { toggleLanguage } from '../../store/reducers/languageSlice'
import { setCartShow } from '../../store/reducers/cartSlice'

import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

const HeaderMobile = () => {
	const dispatch = useAppDispatch()

	const { hamburger } = useAppSelector((state) => state.hamburgerReducer)

	const handleHamburgerClick = () => {
		dispatch(setHamburger())
	}

	return (
		<div className='header-mobile'>
			<div className='header-mobile__container container'>
				<RoundButton
					onClick={() => handleHamburgerClick()}
					className='header-mobile__hamburger'>
					<span></span>
					<span></span>
					<span></span>
				</RoundButton>
				<Link to='/'>
					<img className='menu__logo' src={logo} alt='logo' />
				</Link>
			</div>
			{hamburger ? <Menu /> : null}
		</div>
	)
}

function Menu() {
	const dispatch = useAppDispatch()

	const { theme } = useAppSelector((state) => state.themeReducer)
	const { language } = useAppSelector((state) => state.languageReducer)

	const handleCartClick = () => {
		dispatch(setCartShow(true))
	}

	const { t } = useTranslation()

	return (
		<div className='menu'>
			<div className='menu__container'>
				<Link to='/catalog'>
					<RegularButton className='menu__catalog'>
						{t('header.catalog')}
					</RegularButton>
				</Link>
				<div className='menu__input-box'>
					<GlobalSearch />
				</div>
				<div className='menu__box'>
					<div className='menu__buttons'>
						<RoundButton
							className='menu__button'
							onClick={() => dispatch(toggleLanguage())}>
							<img src={language === 'ru' ? english : russian} alt='language' />
						</RoundButton>
						<RoundButton
							className='menu__button'
							onClick={() => dispatch(toggleTheme())}>
							<img src={theme === 'dark' ? light : dark} alt='theme' />
						</RoundButton>
						<Link to='/authorization' className='menu__button'>
							<RoundButton>
								<img src={profile} alt='profile' />
							</RoundButton>
						</Link>
						<RoundButton
							onClick={handleCartClick}
							className='menu__button button-cart'>
							<img src={cart} alt='cart' />
						</RoundButton>
					</div>
					<Cart />
				</div>
			</div>
		</div>
	)
}

export default HeaderMobile
