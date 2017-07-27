import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { IndexRoute } from 'react-router';
import MainButton from './components/mainButton';
import Nav from './components/nav';
import Link from './components/link';
import Users from './users';
import { MenuDropdown } from './components/menuDropdown';
import MainContainer from './components/mainContainer';
import img from 'file-loader!../img/logo.png';
import { MainBox } from './mainBox';
import MyPolls from './myPolls';

class User extends Component {
	constructor(props) {
		super(props);
		this.directTo = (event) => {
			const direct = event.target.id;
			this.props.history.push(`/main/${direct}`);
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
					<UserBox>
						<Nav>
							<MainButton id="newPoll" onClick={this.directTo} nav type="button" value="New poll"/>
							<MainButton id="myPolls" onClick={this.directTo} nav type="button" value="My polls"/>
							<MainButton id="pollTemplates" onClick={this.directTo} nav type="button" value="Poll templates"/>
							<MainButton id="users" onClick={this.directTo} nav type="button" value="Users"/>
						</Nav>
						<Main>
							<Route exact path='/main' component={MainBox}/>
							<Route path='/main/users' component={Users}/>
							<Route path='/main/myPolls' component={MyPolls}/>
							{/*<Route path='/user/pollTemplates' component={PollTemplates}/>
							<Route path='/user/newPoll' component={newPoll}/>*/}
						</Main>
					</UserBox>
				</MainContainer>
			</div>
		);
	}
}
export default User;
const UserBox = styled.div`
		display: flex;
		flex: 1 1 auto;
		align-items: stretch;
		width: 100%;
		@media (max-width: 768px) {
			flex-direction: column;
		}
`;
const Main = styled.main`
		flex: 1 1 auto;
		max-width: 90%;
		height: 100%;
		@media (max-width: 768px) {
				max-width: 100%;
		}
`;
