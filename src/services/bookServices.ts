import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IBook } from '../models/IBook'
import { IComments } from '../models/IComments'

export interface IGetAllBooks {
	limit: number
	page: number
}

export interface IGetCommentsBookById {
	limit: number
	page: number
	id: number
}

export interface IGetRandomBooks {
	limit: number
	start: number
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
		getBookById: builder.query<IBook, number>({
			query: (id) => ({
				url: `/posts`,
				params: { id },
			}),
		}),
		getCommentsBookById: builder.query<IComments, IGetCommentsBookById>({
			query: ({ limit = 2, page = 1, id }) => ({
				url: `/posts/${id}/comments`,
				params: { _limit: limit, _page: page },
			}),
		}),
		getRandomBooks: builder.query<IBook[], IGetRandomBooks>({
			query: ({ limit = 5, start = 10 }) => ({
				url: `/posts`,
				params: { _limit: limit, _start: start },
			}),
		}),
		getSearchBookByTitle: builder.query<IBook[], string>({
			query: (title) => ({
				url: `/posts?title_like=${title}`,
				params: { _title: title },
			}),
		}),
	}),
})
