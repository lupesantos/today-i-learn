export type ApplicationError = {
	name: string;
	message: string;
};

export function unauthorizedError(): ApplicationError {
	return {
		name: 'UnauthorizedError',
		message:
			'You muust be the Tutorial Owner to edit. If u want to change it, u can make a sugestion to the Owner!',
	};
}
