import useAsync from '../useAsync';

import * as errorApi from '../../services/errorApi';

export default function usePostError() {
	const {
		loading: postErrorLoading,
		error: postErrorError,
		act: postError,
	} = useAsync(errorApi.postError, false);

	return {
		postErrorLoading,
		postErrorError,
		postError,
	};
}
