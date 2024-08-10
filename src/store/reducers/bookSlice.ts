import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BookState {
	totalPages: number
	page: number
	count: number
}

const initialState: BookState = {
	totalPages: 6,
	page: 1,
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
		nextPage(state, action: PayloadAction<number>) {
			if (state.page < state.totalPages) {
				state.page += action.payload
			}
		},
		previousPage(state, action: PayloadAction<number>) {
			if (state.page > 1) {
				state.page -= action.payload
			}
		},
		setTotalPages: (state, action: PayloadAction<number>) => {
			state.totalPages = action.payload
		},
	},
})

export const { previousPage, nextPage, setTotalPages, increment, changePage } =
	bookSlice.actions
export default bookSlice.reducer
