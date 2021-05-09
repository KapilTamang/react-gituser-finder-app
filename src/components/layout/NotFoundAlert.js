import React, { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';

const NotFound = () => {
	const githubContext = useContext(GithubContext);

	const { notFoundAlert } = githubContext;

	return (
		notFoundAlert !== null && (
			<div className={`alert alert-${notFoundAlert.type}`}>
				<i className="fas fa-exclamation-circle"></i> &nbsp; {notFoundAlert.msg}
			</div>
		)
	);
};

export default NotFound;
