import { Routes, Route } from 'react-router-dom'

import Layout from '../templates/layout'

import MainPage from '../pages/mainPage'
import AuthorizationPage from '../pages/authorizationPage'
import RegistrationPage from '../pages/registrationPage'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path='authorization' element={<AuthorizationPage />}></Route>
					<Route path='registration' element={<RegistrationPage />}></Route>
					{/* <Route path="*" element={<NotFound />}></Route> */}
				</Route>
			</Routes>
		</>
	)
}

export default App
