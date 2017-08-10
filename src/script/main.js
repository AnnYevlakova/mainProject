import React, { Component } from 'react';
import styled from 'styled-components';

import MainButton from './commonComponents/mainButton';
import Navigation from './commonComponents/navigation';
import MenuDropdown from './commonComponents/menuDropdown';
import DefaultLink from './commonComponents/defaultLink';

import MainBox from './componentsForMain/mainBox';
import MainContainer from './commonComponents/mainContainer';

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
						<DefaultLink header className="link" href="https://www.itechart.com/" target="_blank">about us</DefaultLink>
						<MenuDropdown/>
					</nav>
				</header>
				<MainContainer user>
					<UserBox>
						<Navigation>
							<MainButton id="main" onClick={this.directTo} nav type="button" value="Main"/>
							<MainButton id="newPoll" onClick={this.directTo} nav type="button" value="New poll"/>
							<MainButton id="myPolls" onClick={this.directTo} nav type="button" value="My polls"/>
							<MainButton id="pollTemplates" onClick={this.directTo} nav type="button" value="Poll templates"/>
							<MainButton id="users" onClick={this.directTo} nav type="button" value="Users"/>
						</Navigation>
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
