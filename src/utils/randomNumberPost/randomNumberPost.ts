import axios from 'axios'

export async function getRandomNumberPost(limit: number) {
	const response = await axios.head(
		'https://jsonplaceholder.typicode.com/posts',
		{
			params: { _limit: 1 },
		}
	)
	const totalCount = response.headers['x-total-count']

	for (let i = 0; i < limit; i++) {
		return Math.floor(Math.random() * totalCount) + 1
	}
}
