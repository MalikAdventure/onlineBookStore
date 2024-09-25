import './main.scss'

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setupStore } from './store/store.ts'

import App from './app/App.tsx'

import './18n'
import Spinner from './atoms/loaders/spinner/spinner'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<Suspense
				fallback={
					<div style={{ margin: '40vh auto' }}>
						<Spinner />
					</div>
				}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Suspense>
		</Provider>
	</React.StrictMode>
)
