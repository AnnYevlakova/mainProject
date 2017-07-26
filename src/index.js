import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './script/login';
import { Registration } from './script/registration';
import { User } from './script/user';

require('style-loader!css-loader!less-loader!./style/main.less');

class App extends Component {
	constructor(props) {
		super(props);
		this.onClick = () => {
			document.getElementById('mainContainer').style.alignItems = 'flex-start';
		}
	}
	render() {
		return (
			<div className="container">
					<Switch>
						<Route exact path='/' component={Login}/>
						<Route path='/registration' component={Registration}/>
						<Route exact path='/user' component={User}/>
					</Switch>
				<footer className="footer">
					<p>Copyright @ 2017 iTechArt</p>
				</footer>
			</div>
		);
	}
}

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('app')
);

module.hot.accept();

