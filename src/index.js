import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Login from './script/login';
import Main from './script/main';
import NewPoll from './script/newPoll';
import MyPolls from './script/myPolls';
import Users from './script/users';
import Registration from './script/registration';

require('style-loader!css-loader!less-loader!./style/main.less');

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Route exact path='/' component={Login}/>
					<Route path='/registration' component={Registration}/>
					<Route path='/main' component={Main} />
					<Route path='/users' component={Users} />
					<Route path='/newPoll' component={NewPoll} />
					<Route path='/myPolls' component={MyPolls} />
					<Route path='/poll' component={MyPolls} />
					<footer className="footer">
						<p>Copyright @ 2017 iTechArt</p>
					</footer>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app'),
);

module.hot.accept();
