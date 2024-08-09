import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IBook } from '../models/IBook'

export const api = createApi({
	reducerPath: 'bookApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
	}),
	endpoints: (builder) => ({
		getAllBooks: builder.query<IBook[], number>({
			query: (limit: number = 6) => ({
				url: '/posts',
				params: { _limit: limit },
			}),
		}),
	}),
})
