import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div>
				<p>home</p>
			</div>
		);
	}
}
class Login extends Component {
	render() {
		return (
			<div>
				<p>Login</p>
			</div>
		);
	}
}
class Registration extends Component {
	render() {
		return (
			<p>Registration</p>
		);
	}
}
class App extends Component {
	render() {
		return (
			<div>
				<header>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/registration'>Registration</Link></li>
          </ul>
				</header>
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/registration' component={Registration}/>
          </Switch>
        </main>
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
