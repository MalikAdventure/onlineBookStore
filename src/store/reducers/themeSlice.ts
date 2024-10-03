import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	theme: sessionStorage.getItem('theme') || 'light',
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.theme = state.theme === 'light' ? 'dark' : 'light'
			sessionStorage.setItem('theme', state.theme)
		},
	},
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
