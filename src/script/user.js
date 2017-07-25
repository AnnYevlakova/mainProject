import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import MainButton from './components/mainButton';
import Nav from './components/nav';

export class User extends Component {
	render() {
		return (
			<UserBox>
				<Nav>
					<MainButton nav type="button" value="New poll" />
					<MainButton nav type="button" value="My polls" />
					<MainButton nav type="button" value="Poll templates" />
					<MainButton nav type="button" value="Users" />
				</Nav>
				<Main>
					<Switch>
						<Route/>
						<Route/>
						<Route/>
						<Route/>
					</Switch>
				</Main>
			</UserBox>
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
		max-width: 80%;
		height: 100%;
		background-color: red;
		@media (max-width: 768px) {
				max-width: 100%;
		}
`;
