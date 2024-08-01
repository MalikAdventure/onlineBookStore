import Header from '../organisms/header/header'
import Breadcrumbs from '../organisms/breadcrumbs/breadcrumbs'
import Footer from '../organisms/footer/footer'

// import Carousel from '../organisms/carousel/carousel'
// import Slideshow from '../organisms/slideshow/slideshow'

import Registration from '../organisms/registration/registration'

const Main = () => {
	return (
		<>
			<Header />
			<Breadcrumbs />
			{/* <Carousel />
			<Slideshow /> */}
			<Registration />
			<Footer />
		</>
	)
}

export default Main
