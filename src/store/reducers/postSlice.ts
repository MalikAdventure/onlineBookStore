// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { IPost } from '../../models/IPost'
// import { fetchPosts } from './actionCreators'

// interface PostState {
// 	posts: IPost[]
// 	isLoading: boolean
// 	error: string
// }

// const initialState: PostState = {
// 	posts: [],
// 	isLoading: false,
// 	error: '',
// }

// export const postSlice = createSlice({
// 	name: 'post',
// 	initialState,
// 	reducers: {},
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(
// 				fetchPosts.fulfilled,
// 				(state, action: PayloadAction<IPost[]>) => {
// 					state.isLoading = false
// 					state.error = ''
// 					state.posts = action.payload
// 				}
// 			)
// 			.addCase(fetchPosts.pending, (state) => {
// 				state.isLoading = true
// 			})
// 			.addCase(fetchPosts.rejected, (state, action: PayloadAction<string>) => {
// 				state.isLoading = false
// 				state.error = action.payload
// 			})
// 	},
// })

// export default postSlice.reducer
