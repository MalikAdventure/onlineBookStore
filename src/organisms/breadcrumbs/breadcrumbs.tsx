import './breadcrumbs.scss'

import { Link, useLocation } from 'react-router-dom'

import home from '../../assets/icons/home.png'

import { useTranslation } from 'react-i18next'

const Breadcrumbs = () => {
	const { t } = useTranslation()

	const location = useLocation()
	let currentLink = ''
	const crumbs = location.pathname
		.split('/')
		.filter((crumb) => crumb !== '')
		.map((crumb) => {
			currentLink += `/${crumb}`
			return (
				<li className='breadcrumbs__crumb link-text' key={crumb}>
					<Link to={currentLink}>
						{t(`breadcrumbs.${crumb}`, { defaultValue: crumb })}
					</Link>
				</li>
			)
		})

	return (
		<nav className='breadcrumbs'>
			<ul className='breadcrumbs__container container'>
				<li className='breadcrumbs__crumb link-text'>
					<Link to='/'>
						<img src={home} alt='главная' />
						{t('breadcrumbs.main')}
					</Link>
				</li>
				{crumbs}
			</ul>
		</nav>
	)
}

export default Breadcrumbs
