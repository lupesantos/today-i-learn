import api from './api';

export async function postError(userId, name, description, tags) {
	const response = await api.post('/errors', {
		userId,
		name,
		description,
		tags,
	});
	return response.data;
}
