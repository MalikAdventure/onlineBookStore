import './layout.scss'

import { Outlet } from 'react-router-dom'

import Header from '../organisms/header/header'
import Breadcrumbs from '../organisms/breadcrumbs/breadcrumbs'
import Footer from '../organisms/footer/footer'

const Layout = () => {
	return (
		<>
			<Header />
			<Breadcrumbs />
			<main className='outlet'>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default Layout
