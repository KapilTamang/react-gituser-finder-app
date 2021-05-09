import React, { Fragment } from 'react';
import Search from '../users/Search';
import NotFoundAlert from '../layout/NotFoundAlert';
import Users from '../users/Users';

const Home = () => {
	return (
		<Fragment>
			<Search />
			<NotFoundAlert />
			<Users />
		</Fragment>
	);
};

export default Home;
