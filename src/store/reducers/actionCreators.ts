import axios from 'axios'
import { AppDispatch } from '../store'
import { IPost } from '../../models/IPost'
import { postSlice } from './postSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'

// export const fetchPosts = () => async (dispatch: AppDispatch) => {
// 	try {
// 		dispatch(postSlice.actions.postsFetching())
// 		const response = await axios.get<IPost[]>(
// 			'https://jsonplaceholder.typicode.com/posts'
// 		)
// 		dispatch(postSlice.actions.postsFetchingSuccess(response.data))
// 	} catch (e) {
// 		dispatch(postSlice.actions.postsFetchingError((e as Error).message))
// 	}
// }

export const fetchPosts = createAsyncThunk(
	'posts/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<IPost[]>(
				'https://jsonplaceholder.typicode.com/posts'
			)
			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue('Не удалось загрузить посты')
		}
	}
)
