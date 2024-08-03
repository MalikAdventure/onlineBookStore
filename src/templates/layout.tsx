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
			<div className='outlet'>
				<Outlet />
			</div>
			<Footer />
		</>
	)
}

export default Layout
