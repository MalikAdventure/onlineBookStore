import './slideshow.scss'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { FC } from 'react'

import react from '../../assets/imgs/react.png'
import redux from '../../assets/imgs/redux.png'
import typescript from '../../assets/imgs/typescript.png'
import atomic from '../../assets/imgs/atomic.png'
import vite from '../../assets/imgs/vite.png'
import json from '../../assets/imgs/JSON-Placeholder.png'
import reacthookform from '../../assets/imgs/reacthookform.png'

const Slideshow: FC = () => {
	const settings = {
		className: 'center',
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 5,
		autoplay: true,
		speed: 5000,
		autoplaySpeed: 0,
		cssEase: 'linear',
		arrows: false,
		touchMove: false,
		pauseOnHover: false,
	}

	return (
		<section className='slideshow section'>
			<Slider {...settings}>
				<div className='slideshow__slide'>
					<img src={react} alt='react' />
				</div>
				<div className='slideshow__slide'>
					<img src={redux} alt='redux' />
				</div>
				<div className='slideshow__slide'>
					<img src={typescript} alt='typescript' />
				</div>
				<div className='slideshow__slide'>
					<img src={atomic} alt='atomic' />
				</div>
				<div className='slideshow__slide'>
					<img src={vite} alt='vite' />
				</div>
				<div className='slideshow__slide'>
					<img src={json} alt='json' />
				</div>
				<div className='slideshow__slide'>
					<img src={reacthookform} alt='reacthookform' />
				</div>
			</Slider>
		</section>
	)
}

export default Slideshow
