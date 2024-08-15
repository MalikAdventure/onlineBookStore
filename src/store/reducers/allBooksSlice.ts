import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AllBooksState {
	totalPages: number
	page: number
}

const initialState: AllBooksState = {
	totalPages: 0,
	page: 1,
}

export const allBooksSlice = createSlice({
	name: 'allBooks',
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

export const { setTotalPages, changePage } = allBooksSlice.actions
export default allBooksSlice.reducer
