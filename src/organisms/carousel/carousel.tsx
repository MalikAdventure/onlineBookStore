import './carousel.scss'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import RegularButton from '../../atoms/buttons/regularButton/regularButton'

import book1 from '../../assets/imgs/book-1.png'
import book2 from '../../assets/imgs/book-2.jpg'
import book3 from '../../assets/imgs/book-3.jpg'
import book4 from '../../assets/imgs/book-4.jpg'

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
	}

	return (
		<section className='carousel section'>
			<div className='carousel__container container'>
				<Slider {...settings}>
					<div>
						<div className='carousel__box'>
							<div className='carousel__item'>
								<img className='carousel__item-img' src={book1} alt='книга' />
							</div>
							<div className='carousel__item'>
								<h3 className='carousel__item-title title-text'>
									1 Легендарная книга у нас в продаже
								</h3>
								<p className='carousel__item-text description-text'>
									Успейте купить !!!
								</p>
								<RegularButton>Купить</RegularButton>
							</div>
						</div>
					</div>
					<div>
						<div className='carousel__box'>
							<div className='carousel__item'>
								<img className='carousel__item-img' src={book2} alt='книга' />
							</div>
							<div className='carousel__item'>
								<h3 className='carousel__item-title title-text'>
									2 Легендарная книга у нас в продаже
								</h3>
								<p className='carousel__item-text description-text'>
									Успейте купить !!!
								</p>
								<RegularButton>Купить</RegularButton>
							</div>
						</div>
					</div>
					<div>
						<div className='carousel__box'>
							<div className='carousel__item'>
								<img className='carousel__item-img' src={book3} alt='книга' />
							</div>
							<div className='carousel__item'>
								<h3 className='carousel__item-title title-text'>
									3 Легендарная книга у нас в продаже
								</h3>
								<p className='carousel__item-text description-text'>
									Успейте купить !!!
								</p>
								<RegularButton>Купить</RegularButton>
							</div>
						</div>
					</div>
					<div>
						<div className='carousel__box'>
							<div className='carousel__item'>
								<img className='carousel__item-img' src={book4} alt='книга' />
							</div>
							<div className='carousel__item'>
								<h3 className='carousel__item-title title-text'>
									4 Легендарная книга у нас в продаже
								</h3>
								<p className='carousel__item-text description-text'>
									Успейте купить !!!
								</p>
								<RegularButton>Купить</RegularButton>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</section>
	)
}

export default Carousel
