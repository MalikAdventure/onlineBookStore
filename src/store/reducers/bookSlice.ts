import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IComments } from '../../models/IComments'

export interface BookState {
	totalPages: number
	page: number
	allComments: IComments[]
}

const initialState: BookState = {
	totalPages: 0,
	page: 1,
	allComments: [],
}

export const bookSlice = createSlice({
	name: 'book',
	initialState,
	reducers: {
		loadMore: (state, action: PayloadAction<number>) => {
			if (state.page < state.totalPages) {
				state.page += action.payload
			}
		},
		setTotalPages: (state, action: PayloadAction<number>) => {
			state.totalPages = action.payload
		},
		setComments: (state, action: PayloadAction<IComments[]>) => {
			state.allComments = [...state.allComments, ...action.payload]
		},
		deleteComments: (state) => {
			state.allComments = []
			state.page = 1
		},
	},
})

export const { setTotalPages, loadMore, setComments, deleteComments } =
	bookSlice.actions
export default bookSlice.reducer
