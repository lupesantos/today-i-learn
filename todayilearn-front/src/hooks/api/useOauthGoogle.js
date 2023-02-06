import useAsync from '../useAsync';

import * as googleApi from '../../services/googleApi';

export default function useSignUpSignInWithGoogle() {
	const {
		loading: signUpSignInLoading,
		error: ssignUpSignInError,
		act: signUpSignIn,
	} = useAsync(googleApi.googleAuth, false);

	return {
		signUpSignInLoading,
		ssignUpSignInError,
		signUpSignIn,
	};
}
