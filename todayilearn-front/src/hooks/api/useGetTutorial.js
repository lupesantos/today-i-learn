import useAsync from '../useAsync';

import * as tutorialApi from '../../services/tutorialApi';

export default function useGetTutorial() {
	const {
		loading: getTutorialLoading,
		error: getTutorialError,
		act: getTutorial,
	} = useAsync(tutorialApi.getTutorial, false);

	return {
		getTutorialLoading,
		getTutorialError,
		getTutorial,
	};
}
