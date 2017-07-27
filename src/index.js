import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './script/login';
import Registration from './script/registration';
import User from './script/user';

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
					<Route path='/main' component={User} />
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
