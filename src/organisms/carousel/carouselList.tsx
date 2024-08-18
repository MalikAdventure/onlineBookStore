import './carouselList.scss'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { api } from '../../services/bookServices'

import CarouselItem from './carouselItem'
import Spinner from '../../atoms/loaders/spinner/spinner'

const Carousel = () => {
	const limit = 5

	const {
		data: books,
		isLoading,
		error,
	} = api.useGetRandomBooksQuery({ limit })

	const settings = {
		dots: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		// pauseOnHover: true,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
	}

	return (
		<section className='carousel section'>
			<div className='carousel__container container'>
				<Slider {...settings}>
					{books &&
						books.map((book) => <CarouselItem key={book.id} book={book} />)}
					{books?.length === 0 && (
						<h2 className='carousel__text link-text'>Книги не найдены</h2>
					)}
					{isLoading && <Spinner />}
					{error && (
						<h2 className='carousel__text error-text'>
							Ошибка: Не удалось получить книги
						</h2>
					)}
				</Slider>
			</div>
		</section>
	)
}

export default Carousel
