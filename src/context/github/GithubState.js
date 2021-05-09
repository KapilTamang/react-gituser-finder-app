import React, { useReducer } from 'react';
import axios from 'axios';
import GithubReducer from './GithubReducer';
import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_USER_REPOS,
	SET_NOT_FOUND_ALERT,
	RESET_NOT_FOUND_ALERT,
} from '../types';
import GithubContext from './GithubContext';

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
		notFoundAlert: null,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	//Search Github Users
	const searchUsers = async (username) => {
		setLoading();

		const res = await axios.get(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
		&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

		if (res.data.total_count === 0) {
			dispatch({
				type: SET_NOT_FOUND_ALERT,
				msg: `User ${username} Not Found.`,
				style: 'light',
			});

			setTimeout(() => dispatch({ type: RESET_NOT_FOUND_ALERT }), 3000);
		} else {
			dispatch({
				type: SEARCH_USERS,
				payload: res.data.items,
			});
		}
	};

	//Get a Single Github User
	const getUser = async (username) => {
		setLoading();

		const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
		client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

		dispatch({
			type: GET_USER,
			payload: res.data,
		});
	};

	//Get User Repos
	const getUserRepos = async (username) => {
		setLoading();

		const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=6&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
		&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

		dispatch({
			type: GET_USER_REPOS,
			payload: res.data,
		});
	};

	//Clear Users
	const clearUsers = () => {
		dispatch({
			type: CLEAR_USERS,
		});
	};

	//Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				notFoundAlert: state.notFoundAlert,
				searchUsers,
				getUser,
				getUserRepos,
				clearUsers,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
