function getUserToken() {
	return JSON.parse(sessionStorage.getItem('@AuthFirebase:token'));
}

export default getUserToken;
