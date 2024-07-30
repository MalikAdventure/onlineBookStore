import './footer.scss'

import github from '../../assets/icons/github.png'
import telegram from '../../assets/icons/telegram.png'
import email from '../../assets/icons/e-mail.png'
import google from '../../assets/icons/google.png'
import atomic from '../../assets/icons/atomic.png'

const Footer = () => {
	return (
		<footer className='footer section'>
			<div className='footer__container container'>
				<div className='footer__box'>
					<div className='footer__item'>
						<h3 className='footer__title title-text'>О проекте</h3>
						<p className='link-text'>
							Данный веб-сайт является тестовой разработкой Малика Антона с
							использованием React + Redux + TS + Vite + Atomic Design
						</p>
					</div>
					<div className='footer__item'>
						<h3 className='footer__title title-text'>Об авторе</h3>
						<div className='footer__title-box'>
							<div className='footer__title-item'>
								<img src={github} alt='github' />
								<p className='link-text'>GitHub</p>
							</div>
							<div className='footer__title-item'>
								<img src={telegram} alt='telegram' />
								<p className='link-text'>Телеграмм</p>
							</div>
							<div className='footer__title-item'>
								<img src={email} alt='e-mail' />
								<p className='link-text'>Почта</p>
							</div>
						</div>
					</div>
					<div className='footer__item'>
						<h3 className='footer__title title-text'>Полезные ссылки</h3>
						<div className='footer__title-box'>
							<div className='footer__title-item'>
								<img src={google} alt='google' />
								<p className='link-text'>Google Books APIs</p>
							</div>
							<div className='footer__title-item'>
								<img src={atomic} alt='atomic' />
								<p className='link-text'>Atomic Design</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
