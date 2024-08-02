import { Outlet } from 'react-router-dom'

import Header from '../organisms/header/header'
import Breadcrumbs from '../organisms/breadcrumbs/breadcrumbs'
import Footer from '../organisms/footer/footer'

const Layout = () => {
	return (
		<>
			<Header />
			<Breadcrumbs />
			<Outlet />
			<Footer />
		</>
	)
}

export default Layout
