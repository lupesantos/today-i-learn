import api from './api';

export async function postTutorial(userId, name, description, tags) {
	const response = await api.post('/tutorials', {
		userId,
		name,
		description,
		tags,
	});
	return response.data;
}

export async function getTutorial(term) {
	const response = await api.get(`/tutorials?term=${term}`);
	return response.data;
}
