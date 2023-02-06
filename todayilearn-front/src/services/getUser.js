function getUserEmailId() {
	return JSON.parse(sessionStorage.getItem('@AuthFirebase:user'));
}

export default getUserEmailId;
