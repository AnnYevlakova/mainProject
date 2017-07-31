import React, { Component } from 'react';
import styled from 'styled-components';
import { IndexRoute } from 'react-router';
import MainButton from './components/mainButton';
import Nav from './components/nav';
import { MenuDropdown } from './components/menuDropdown';
import Link from './components/link';
import { MainBox } from './mainBox';
import MainContainer from './components/mainContainer';
import img from 'file-loader!../img/logo.png';

const UserBox = styled.div`
		display: flex;
		flex: 1 1 auto;
		align-items: stretch;
		width: 100%;
		@media (max-width: 768px) {
			flex-direction: column;
		}
`;
const MainDiv = styled.main`
		flex: 1 1 auto;
		max-width: 90%;
		height: 100%;
		@media (max-width: 768px) {
				max-width: 100%;
		}
`;
class Main extends Component {
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
					<UserBox>
						<Nav>
							<MainButton id="main" onClick={this.directTo} nav type="button" value="Main"/>
							<MainButton id="newPoll" onClick={this.directTo} nav type="button" value="New poll"/>
							<MainButton id="myPolls" onClick={this.directTo} nav type="button" value="My polls"/>
							<MainButton id="pollTemplates" onClick={this.directTo} nav type="button" value="Poll templates"/>
							<MainButton id="users" onClick={this.directTo} nav type="button" value="Users"/>
						</Nav>
						<MainDiv>
							<MainBox/>
						</MainDiv>
					</UserBox>
				</MainContainer>
			</div>
		);
	}
}
export default Main;

