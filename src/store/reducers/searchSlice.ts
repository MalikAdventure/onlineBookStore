import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SearchState {
	searchTitle: string
	suggestShow: boolean
}

const initialState: SearchState = {
	searchTitle: '',
	suggestShow: false,
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchTitle: (state, action: PayloadAction<string>) => {
			state.searchTitle = action.payload
		},
		setSuggestShow: (state, action: PayloadAction<boolean>) => {
			state.suggestShow = action.payload
		},
	},
})

export const { setSearchTitle, setSuggestShow } = searchSlice.actions
export default searchSlice.reducer
