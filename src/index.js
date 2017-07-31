import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './script/login';
import Main from './script/main';
import NewPolls from './script/newPolls';
import myPolls from './script/myPolls';
import Users from './script/users';
import Registration from './script/registration';

require('style-loader!css-loader!less-loader!./style/main.less');

class App extends Component {
	constructor(props) {
		super(props);
		this.onClick = () => {
			document.getElementById('mainContainer').style.alignItems = 'flex-start';
		};
	}
	render() {
		return (
			<Router>
				<div className="container">
					<Route exact path='/' component={Login}/>
					<Route path='/registration' component={Registration}/>
					<Route path='/main' component={Main} />
					<Route path='/users' component={Users} />
					<Route path='/newPolls' component={NewPolls} />
					<Route path='/myPolls' component={myPolls} />
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
