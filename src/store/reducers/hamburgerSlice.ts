import { createSlice } from '@reduxjs/toolkit'

export interface HamburgerState {
	hamburger: boolean
}

const initialState: HamburgerState = {
	hamburger: false,
}

export const hamburgerSlice = createSlice({
	name: 'hamburger',
	initialState,
	reducers: {
		setHamburger: (state) => {
			state.hamburger = state.hamburger === false ? true : false
		},
	},
})

export const { setHamburger } = hamburgerSlice.actions
export default hamburgerSlice.reducer
