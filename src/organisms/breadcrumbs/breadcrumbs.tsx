import './breadcrumbs.scss'

import { Link, useLocation } from 'react-router-dom'

import home from '../../assets/icons/home.png'

const Breadcrumbs = () => {
	const location = useLocation()
	let currentLink = ''
	const crumbs = location.pathname
		.split('/')
		.filter((crumb) => crumb !== '')
		.map((crumb) => {
			currentLink += `/${crumb}`

			return (
				<li className='breadcrumbs__crumb link-text' key={crumb}>
					<Link to={currentLink}>{crumb}</Link>
				</li>
			)
		})

	return (
		<nav className='breadcrumbs'>
			<ul className='breadcrumbs__container container'>
				<li className='breadcrumbs__crumb link-text'>
					<Link to='/'>
						<img src={home} alt='главная' />
						Главная
					</Link>
				</li>
				{crumbs}
			</ul>
		</nav>
	)
}

export default Breadcrumbs
