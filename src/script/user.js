import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import MainButton from './components/mainButton';
import Nav from './components/nav';
import Link from './components/link';
import { MenuDropdown } from './components/menuDropdown';
import { MainBox, Users } from './mainBox';
import MainContainer from './components/mainContainer';
import img from 'file-loader!../img/logo.png';

export class User extends Component {
	constructor(props) {
		super(props);
		this.directTo = (event) => {
			const direct = event.target.id;
			this.props.history.push(`/user/${direct}`);
		}
	}
	render() {
		return (
			<div className="box">
				<header className="header">
					<img className="logo" src={img} alt="" />
					<nav className="headerNav">
						<Link header  className="link" href="https://www.itechart.com/" target="_blank">about us</Link>
						<MenuDropdown/>
					</nav>
				</header>
				<MainContainer user>
					<UserBox>
						<Nav>
							<MainButton id="newPoll" onClick={this.directTo} nav type="button" value="New poll" />
							<MainButton id="myPolls" onClick={this.directTo} nav type="button" value="My polls" />
							<MainButton id="pollTemplates" onClick={this.directTo} nav type="button" value="Poll templates" />
							<MainButton id="users" onClick={this.directTo} nav type="button" value="Users" />
						</Nav>
						<Main>
							<Switch>
								<Route exact path='/user/' component={MainBox}/>
								<Route path='/user/users' component={Users}/>
								{/*<Route path='/user/myPolls' component={MyPolls}/>
								<Route path='/user/pollTemplates' component={PollTemplates}/>
								<Route path='/user/newPoll' component={newPoll}/>*/}
							</Switch>
						</Main>
					</UserBox>
				</MainContainer>
			</div>
		);
		}
}

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
