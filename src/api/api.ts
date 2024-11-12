import { IFormData } from '../types/types'

export async function sendMessage(data: IFormData) {
	return await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			title: data.name,
			body: data.text,
			userId: data.email,
		}),
		headers: {
			'Content-type': 'application/json',
		},
	})
}
