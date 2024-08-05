import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const _apiBase = 'https://jsonplaceholder.typicode.com/'

// class BookServices {
// 	static async getAllBooks() {
// 		const response = await axios.get(`${_apiBase}/posts`)
// 		return response
// 	}
// }

interface IPost {
	userId: number
	id: number
	title: string
	body: string
}

export const api = createApi({
	reducerPath: 'postApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
	}),
	endpoints: (builder) => ({
		getAllPosts: builder.query<IPost[], number>({
			query: (limit: number = 5) => ({
				url: '/posts',
				params: { _limit: limit },
			}),
		}),
	}),
})

//!!! пример как все сложить

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const api = createApi({
// 	reducerPath: 'api',
// 	baseQuery: fetchBaseQuery({
// 		baseUrl: 'https://jsonplaceholder.typicode.com',
// 	}),
// 	endpoints: (builder) => ({
// 		getPosts: builder.query({
// 			query: () => 'posts',
// 		}),
// 		getPostById: builder.query({
// 			query: (id: number) => `posts/${id}`,
// 		}),
// 		getComments: builder.query({
// 			query: () => 'comments',
// 		}),
// 		getCommentById: builder.query({
// 			query: (id: number) => `comments/${id}`,
// 		}),
// 		// и т.д.
// 	}),
// })

// export const {
// 	useGetPostsQuery,
// 	useGetPostByIdQuery,
// 	useGetCommentsQuery,
// 	useGetCommentByIdQuery,
// } = api
