import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FavoritesState {
	allFavorites: number[]
}

const initialState: FavoritesState = {
	allFavorites: [],
}

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		setFavorites: (state, action: PayloadAction<number[]>) => {
			const newFavorites = [...state.allFavorites]
			const favoriteId = action.payload[0]
			const index = newFavorites.indexOf(favoriteId)
			if (index !== -1) {
				newFavorites.splice(index, 1)
			} else {
				newFavorites.push(favoriteId)
			}
			state.allFavorites = newFavorites
		},
	},
})

export const { setFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
