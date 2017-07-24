import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './script/login';
import MyLink from './script/components/myLink';
import { Registration } from './script/registration';
import { User } from './script/user';
import img from 'file-loader!./img/logo.png';

require('style-loader!css-loader!less-loader!./style/main.less');

const MainContainer = styled.main`
	display: flex;
	justify-content: center;
	align-items: ${props => (props.logout ? 'flex-start' : 'stretch')};
	flex: 1 1 auto;
	height: 70%;  
`;

class App extends Component {
	render() {
		return (
			<div className="container">
			<header className="header">
				<img className="logo" src={img} alt="" />
				<nav className="header-nav">
					<a className="about-us" href="https://www.itechart.com/">about us</a>
					<MyLink  header to="/">log in</MyLink>
				</nav>
			</header>
			<MainContainer logout="true" id="main-container">
				<Switch>
					<Route exact path='/' component={Login}/>
					<Route path='/registration' component={Registration}/>
					<Route exact path='/user' component={User}/>
				</Switch>
			</MainContainer>
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



