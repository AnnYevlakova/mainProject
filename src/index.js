import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Login } from './script/login';
import { MyLink } from './script/components/my-link';
import { Registration } from './script/registration';
require('style-loader!css-loader!less-loader!./style/main.less');

class App extends Component {
	render() {
		return (
			<div className="container">
				<header className="header">
          <image className="logo" src="https://www.itechart.com/static/img/logo.png" alt="" />
          <nav className="header-nav">
            <a></a>
            <MyLink  header value="log in" to="/"/>
          </nav>
				</header>
        <main className="main-container">
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/registration' component={Registration}/>
          </Switch>
        </main>
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
