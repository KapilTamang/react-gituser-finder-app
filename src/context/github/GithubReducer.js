import {
	RESET_NOT_FOUND_ALERT,
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_USER_REPOS,
	SET_NOT_FOUND_ALERT,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};

		case GET_USER: {
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		}

		case GET_USER_REPOS: {
			return {
				...state,
				repos: action.payload,
				loading: false,
			};
		}

		case CLEAR_USERS: {
			return {
				...state,
				users: [],
				loading: false,
			};
		}

		case SET_NOT_FOUND_ALERT: {
			return {
				...state,
				notFoundAlert: {
					msg: action.msg,
					type: action.style,
				},
				loading: false,
			};
		}

		case RESET_NOT_FOUND_ALERT: {
			return {
				...state,
				notFoundAlert: null,
			};
		}

		case SET_LOADING:
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
};
