import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
	return (
		<div className="card text-center">
			<p style={{ fontSize: "1.2rem" }}>
				<i class="fab fa-github"></i> &nbsp;
				<strong>{repo.name}</strong>
			</p>
			<a href={repo.html_url} className="btn btn-xs my-1">
				Visit Repo
			</a>
			{repo.description && <p>{repo.description}</p>}
		</div>
	);
};

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
};

export default RepoItem;
