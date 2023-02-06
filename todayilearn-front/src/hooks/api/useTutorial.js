import useAsync from '../useAsync';

import * as tutorialApi from '../../services/tutorialApi';

export default function usePostTutorial() {
	const {
		loading: postTutorialLoading,
		error: postTutorialError,
		act: postTutorial,
	} = useAsync(tutorialApi.postTutorial, false);

	return {
		postTutorialLoading,
		postTutorialError,
		postTutorial,
	};
}
