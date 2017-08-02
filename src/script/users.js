import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainButton from './components/mainButton';
import { UserList } from './userList';
import { UserInfo } from './userInfo';
import Link from './components/link';
import Nav from './components/nav';

import { MenuDropdown } from './components/menuDropdown';
import MainContainer from './components/mainContainer';
import img from 'file-loader!../img/logo.png';

class Users extends Component {
	constructor(props) {
		super(props);
		this.directTo = (event) => {
			const direct = event.target.id;
			this.props.history.push(`/${direct}`);
		};
	}
	render() {
		return (
			<div className="box">
				<header className="header">
					<img className="logo" src={img} alt=""/>
					<nav className="headerNav">
						<Link header className="link" href="https://www.itechart.com/" target="_blank">about us</Link>
						<MenuDropdown/>
					</nav>
				</header>
				<MainContainer user>
					<Nav>
						<MainButton id="main" onClick={this.directTo} nav type="button" value="Main"/>
						<MainButton id="newPoll" onClick={this.directTo} nav type="button" value="New poll"/>
						<MainButton id="myPolls" onClick={this.directTo} nav type="button" value="My polls"/>
						<MainButton id="pollTemplates" onClick={this.directTo} nav type="button" value="Poll templates"/>
						<MainButton id="users" onClick={this.directTo} nav type="button" value="Users"/>
					</Nav>
					<Route exact path='/users' component={UserList} />
					<Route path='/users/userInfo' component={UserInfo} />
				</MainContainer>
			</div>
		);
	}
}
export default Users;
