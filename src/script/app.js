import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { store } from './store';
import { Login } from './login';
import MyLink from './components/myLink';
import { MenuDropdown } from './menuDropdown';
import { Registration } from './registration';
import { User } from './user';
import img from 'file-loader!../img/logo.png';

require('style-loader!css-loader!less-loader!../style/main.less');

const MainContainer = styled.main`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex: 1 1 auto;
	height: 70%;  
`;

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="container">
				<header className="header">
					<img className="logo" src={img} alt="" />
					<nav className="headerNav" id="headerNav">
						<a className="aboutUs" id="aboutUs" href="https://www.itechart.com/">about us</a>
						{this.props.state === 'login' ? <MyLink onClick={this.props.login} id="loginLink" header to="/">log in</MyLink> : <MenuDropdown/>}
					</nav>
				</header>
				<MainContainer id="mainContainer">
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

function mapStateToProps(store) {
	return {
		state: store.state
	}
}
function mapActionsToProps(dispatch) {
	return {
		login() {
			store.dispatch({type: 'login'});
		},
		logout() {
			store.dispatch({type: 'logout'});
		}
	}
}

export default connect(mapStateToProps, mapActionsToProps)(App);





