import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BookState {
	totalPages: number
	page: number
	count: number
}

const initialState: BookState = {
	totalPages: 0,
	page: 0,
	count: 0,
}

export const bookSlice = createSlice({
	name: 'book',
	initialState,
	reducers: {
		changePage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		increment(state, action: PayloadAction<number>) {
			state.count += action.payload
		},
	},
})

export const { increment, changePage } = bookSlice.actions
export default bookSlice.reducer
