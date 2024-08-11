import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BookState {
	totalPages: number
	page: number
}

const initialState: BookState = {
	totalPages: 0,
	page: 1,
}

export const bookSlice = createSlice({
	name: 'book',
	initialState,
	reducers: {
		changePage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		setTotalPages: (state, action: PayloadAction<number>) => {
			state.totalPages = action.payload
		},
	},
})

export const { setTotalPages, changePage } = bookSlice.actions
export default bookSlice.reducer
