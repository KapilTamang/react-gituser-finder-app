import React from 'react';

const PageNotFound = () => {
	return (
		<div className="card text-center">
			<p className="lead">
				<strong>
					<i class="fas fa-exclamation-triangle"></i>&nbsp; Page Not Found
				</strong>
			</p>
			<p>The requested page doesnot exist...</p>
		</div>
	);
};

export default PageNotFound;
