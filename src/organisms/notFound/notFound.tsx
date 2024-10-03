import './notFound.scss'

import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import notFoundImg from '../../assets/icons/404.png'

import { useTranslation } from 'react-i18next'

const NotFound: FC = () => {
	const navigate = useNavigate()

	const { t } = useTranslation()

	return (
		<section className='not-found section'>
			<div className='not-found__container container'>
				<h1 className='not-found__title title-text'>{t('notFound.title')}</h1>
				<img className='not-found__img' src={notFoundImg} alt='not found' />
				<h2 className='not-found__text description-text'>
					{t('notFound.description')}{' '}
					<a onClick={() => navigate(-1)} className='not-found__link'>
						{t('notFound.link')}
					</a>
				</h2>
			</div>
		</section>
	)
}

export default NotFound
