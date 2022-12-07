import axios from 'axios';

export async function gql(query: string, variables = {}) {
	const postData = JSON.stringify({ query, variables });
	const data = await axios.post('https://api.hashnode.com/', postData, {
		headers: { 'Content-Type': 'application/json' },
	});

	return data;
}
