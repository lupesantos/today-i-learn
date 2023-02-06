import { createContext, useEffect, useState } from 'react';
import { app } from '../services/firebaseConfig';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import useSignUpSignInWithGoogle from '../hooks/api/useOauthGoogle';
const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});

export default function AuthGoogleProvider({ children }) {
	const auth = getAuth(app);
	const [user, setUser] = useState(null);
	const { signUpSignIn } = useSignUpSignInWithGoogle();

	useEffect(() => {
		const loadStorageAuth = () => {
			const sessionToken = sessionStorage.getItem('@AuthFirebase:token');
			const sessionUser = sessionStorage.getItem('@AuthFirebase:user');

			if (sessionToken && sessionUser) {
				setUser(sessionUser);
			}
		};
		loadStorageAuth();
	}, []);

	async function signInGoogle() {
		try {
			const result = await signInWithPopup(auth, provider);
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			const user = result.user;
			setUser(user);
			const data = await signUpSignIn(user.email, user.displayName);

			sessionStorage.setItem('@AuthFirebase:token', data.token);
			sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(data.user));
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.customData.email;
			const credential = GoogleAuthProvider.credentialFromError(error);
		}
	}

	function signOut() {
		sessionStorage.clear();
		setUser(null);

		return <Navigate to='/' />;
	}

	return (
		<AuthGoogleContext.Provider
			value={{ signInGoogle, signed: !!user, user, signOut }}
		>
			{children}
		</AuthGoogleContext.Provider>
	);
}
