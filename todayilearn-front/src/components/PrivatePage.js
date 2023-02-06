import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PrivatePage({ children }) {
	const authorization = JSON.parse(
		sessionStorage.getItem('@AuthFirebase:user')
	);
	const navigate = useNavigate();

	useEffect(() => {
		if (!authorization) {
			navigate('/');
		}
	}, []);

	if (authorization) {
		return <>{children}</>;
	}
}
