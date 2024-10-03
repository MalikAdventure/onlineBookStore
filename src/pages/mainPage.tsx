import { FC } from 'react'

import Carousel from '../organisms/carousel/carouselList'
import Slideshow from '../organisms/slideshow/slideshow'
import CreationTime from '../organisms/creationTime/creationTime'

const MainPage: FC = () => {
	return (
		<>
			<Carousel />
			<Slideshow />
			<CreationTime />
		</>
	)
}

export default MainPage
