import { combineReducers, configureStore } from '@reduxjs/toolkit'
import allBooksReducer from './reducers/allBooksSlice'
import bookReducer from './reducers/bookSlice'
import themeReducer from './reducers/themeSlice'
import upReducer from './reducers/upSlice'
import timeReducer from './reducers/timeSlice'
import searchReducer from './reducers/searchSlice'
import favoritesReducer from './reducers/favoritesSlice'
import cartReducer from './reducers/cartSlice'
import { api } from '../services/bookServices'

const rootReducer = combineReducers({
	allBooksReducer,
	bookReducer,
	themeReducer,
	upReducer,
	timeReducer,
	searchReducer,
	favoritesReducer,
	cartReducer,
	[api.reducerPath]: api.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(api.middleware),
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
