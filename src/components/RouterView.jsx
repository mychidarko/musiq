import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './../views/Home';
import Profile from './../views/Profile';

export default function RouterView() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/profile" render={() => <Profile name="Michael" />} />
		</Switch>
	);
}