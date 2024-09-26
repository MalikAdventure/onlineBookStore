import './layout.scss'
import '../assets/themes/themes.scss'

import { Outlet } from 'react-router-dom'

import Header from '../organisms/header/header'
import HeaderMobile from '../organisms/header/headerMobile'
import Breadcrumbs from '../organisms/breadcrumbs/breadcrumbs'
import Footer from '../organisms/footer/footer'
import UpButton from '../molecules/upButton/upButton'

import { useAppSelector } from '../hooks/redux'

const Layout = () => {
	const currentTheme = useAppSelector((state) => state.themeReducer.theme)

	return (
		<div className={currentTheme === 'light' ? 'light-theme' : 'dark-theme'}>
			<Header />
			<HeaderMobile />
			<Breadcrumbs />
			<main className='outlet'>
				<Outlet />
			</main>
			<UpButton />
			<Footer />
		</div>
	)
}

export default Layout
