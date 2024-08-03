import './notFound.scss'

import { useNavigate } from 'react-router-dom'

import notFoundImg from '../../assets/icons/404.png'

const NotFound = () => {
	const navigate = useNavigate()

	return (
		<section className='not-found section'>
			<div className='not-found__container container'>
				<h1 className='not-found__title title-text'>Страница не найдена</h1>
				<img className='not-found__img' src={notFoundImg} alt='not found' />
				<h2 className='not-found__text description-text'>
					Такая страница не найдена, но вы можете {''}
					<a onClick={() => navigate(-1)} className='not-found__link'>
						вернуться назад
					</a>
				</h2>
			</div>
		</section>
	)
}

export default NotFound
