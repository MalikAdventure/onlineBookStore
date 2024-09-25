import './footer.scss'

import github from '../../assets/icons/github.png'
import telegram from '../../assets/icons/telegram.png'
import email from '../../assets/icons/e-mail.png'
import json from '../../assets/icons/json.png'
import atomic from '../../assets/icons/atomic.png'

import { useTranslation } from 'react-i18next'

const Footer = () => {
	const { t } = useTranslation()

	return (
		<footer className='footer section'>
			<div className='footer__container container'>
				<div className='footer__box'>
					<div className='footer__item'>
						<h3 className='footer__title title-text'>
							{t('footer.aboutProject')}
						</h3>
						<p className='link-text'>{t('footer.projectInfo')}</p>
					</div>
					<div className='footer__item'>
						<h3 className='footer__title title-text'>
							{t('footer.aboutAuthor')}
						</h3>
						<div className='footer__title-box'>
							<div className='footer__title-item'>
								<a href='https://github.com/MalikAdventure' target='_blank'>
									<img src={github} alt='github' />
									<p className='link-text'>GitHub</p>
								</a>
							</div>
							<div className='footer__title-item'>
								<a href='https://t.me/MalikAnton' target='_blank'>
									<img src={telegram} alt='telegram' />
									<p className='link-text'>{t('footer.telegram')}</p>
								</a>
							</div>
							<div className='footer__title-item'>
								<a href='mailto:malikantonit@gmail.com' target='_blank'>
									<img src={email} alt='e-mail' />
									<p className='link-text'>{t('footer.email')}</p>
								</a>
							</div>
						</div>
					</div>
					<div className='footer__item'>
						<h3 className='footer__title title-text'>
							{t('footer.usefulLinks')}
						</h3>
						<div className='footer__title-box'>
							<div className='footer__title-item'>
								<a href='https://jsonplaceholder.typicode.com/' target='_blank'>
									<img src={json} alt='json' />
									<p className='link-text'>JSON Placeholder</p>
								</a>
							</div>
							<div className='footer__title-item'>
								<a href='https://habr.com/ru/articles/740416/' target='_blank'>
									<img src={atomic} alt='atomic' />
									<p className='link-text'>Atomic Design</p>
								</a>
							</div>
						</div>
					</div>
				</div>
				<hr className='footer__line' />
				<p className='link-text'>{t('footer.copyright')}</p>
			</div>
		</footer>
	)
}

export default Footer
