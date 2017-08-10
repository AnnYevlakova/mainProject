import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import img from 'file-loader!../img/logo.png';

import UserList from './componentsForUsers/userList';
import UserInfo from './componentsForUsers/userInfo';
import MainButton from './commonComponents/mainButton';
import DefaultLink from './commonComponents/defaultLink';
import Navigation from './commonComponents/navigation';
import MenuDropdown from './commonComponents/menuDropdown';
import MainContainer from './commonComponents/mainContainer';


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
						<DefaultLink header className="link" href="https://www.itechart.com/" target="_blank">about us</DefaultLink>
						<MenuDropdown/>
					</nav>
				</header>
				<MainContainer main>
					<Navigation>
						<MainButton id="main" onClick={this.directTo} nav type="button" value="Main"/>
						<MainButton id="newPoll" onClick={this.directTo} nav type="button" value="New poll"/>
						<MainButton id="myPolls" onClick={this.directTo} nav type="button" value="My polls"/>
						<MainButton id="pollTemplates" onClick={this.directTo} nav type="button" value="Poll templates"/>
						<MainButton id="users" onClick={this.directTo} nav type="button" value="Users"/>
					</Navigation>
					<Route exact path='/users' component={UserList} />
					<Route path='/users/userInfo' component={UserInfo} />
				</MainContainer>
			</div>
		);
	}
}
export default Users;
