import React, { useEffect, useContext, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/GithubContext';

const User = ({ match }) => {
	const githubContext = useContext(GithubContext);

	const { getUser, user, loading, getUserRepos, repos } = githubContext;

	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
		//eslint-disable-next-line
	}, []);

	const {
		name,
		avatar_url,
		location,
		company,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;

	if (loading) {
		return <Spinner />;
	}

	return (
		<Fragment>
			<Link to="/" className="btn btn-sm">
				<i class="fas fa-chevron-left"></i>
				<i class="fas fa-chevron-left"></i>&nbsp; Back to Search
			</Link>
			<div className="card grid-2">
				<div className="all-center p-1">
					<img
						src={avatar_url}
						alt="profile pic"
						className="round-img"
						style={{ width: '150px' }}
					/>
					<h1 style={{ marginTop: '0.5rem' }}>{name}</h1>
					<p>Location: {location}</p>
					<p class="badge badge-primary" style={{ marginTop: '0.5rem' }}>
						Hireable :&nbsp; {''}
						{hireable ? (
							<i className="fas fa-check text-success"></i>
						) : (
							<i className="fas fa-times-circle text-danger"></i>
						)}
					</p>
				</div>
				<div className="details p-1">
					{bio && (
						<Fragment>
							<h1>Bio</h1>
							<p>- {bio}</p>
						</Fragment>
					)}
					<a href={html_url} className="btn btn-sm my-1">
						<i class="fab fa-github"></i>&nbsp; Github Profile
					</a>
					<ul>
						<li>
							{login && (
								<Fragment>
									<strong>Username: </strong>
									{login}
								</Fragment>
							)}
						</li>
						<li>
							{company && (
								<Fragment>
									<strong>Company: </strong>
									{company}
								</Fragment>
							)}
						</li>
						<li>
							{blog && (
								<Fragment>
									<strong>Website: </strong>
									{blog}
								</Fragment>
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className="card text-center py-1">
				<div className="badge badge-primary">Followers: {followers}</div>
				<div className="badge badge-light">Following: {following}</div>
				<div className="badge badge-success">Public Repos: {public_repos}</div>
				<div className="badge badge-danger">Public Gists: {public_gists}</div>
			</div>
			<h1
				className="badge badge-success"
				style={{
					marginTop: '3rem',
					fontSize: '1rem',
				}}
			>
				<i class="fab fa-github"></i>&nbsp; Repositories
			</h1>
			<div className="grid-3">
				<Repos repos={repos} />
			</div>
		</Fragment>
	);
};

export default User;
