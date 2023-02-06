import api from './api';

export async function googleAuth(email, name) {
	const response = await api.post('/auth/oauth', { email, name });
	return response.data;
}
