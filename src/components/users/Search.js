import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = ({ setAlert }) => {
	const githubContext = useContext(GithubContext);

	const alertContext = useContext(AlertContext);

	const [text, setText] = useState('');

	const onChange = (e) => {
		setText(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (text === '') {
			alertContext.setAlert('Please enter something', 'danger');
		} else {
			githubContext.searchUsers(text);
			setText('');
		}
	};
	return (
		<div>
			<form className="form" onSubmit={onSubmit}>
				<input
					type="text"
					name="text"
					placeholder="Search for github users..."
					value={text}
					onChange={onChange}
				/>
				<input
					type="submit"
					value="Search"
					className="btn bg-primary btn-block"
				/>
			</form>
			{githubContext.users.length > 0 && (
				<button
					className="btn btn-light btn-block"
					onClick={githubContext.clearUsers}
				>
					Clear &nbsp;<i class="fas fa-trash-alt"></i>
				</button>
			)}
		</div>
	);
};

export default Search;
