import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IBook } from '../models/IBook'

export interface IGetAllBooks {
	limit: number
	page: number
}

export const api = createApi({
	reducerPath: 'bookApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
	}),
	endpoints: (builder) => ({
		getAllBooks: builder.query<IBook[], IGetAllBooks>({
			query: ({ limit = 6, page = 1 }) => ({
				url: '/posts',
				params: { _limit: limit, _page: page },
			}),
		}),
	}),
})
