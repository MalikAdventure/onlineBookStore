import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TimeState {
	nowTime: number
}

const initialState: TimeState = {
	nowTime: 1722013200000,
}

export const timeSlice = createSlice({
	name: 'time',
	initialState,
	reducers: {
		setNowTime: (state, action: PayloadAction<number>) => {
			state.nowTime = action.payload
		},
	},
})

export const { setNowTime } = timeSlice.actions
export default timeSlice.reducer
