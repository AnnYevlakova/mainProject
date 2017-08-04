import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import store from './store';
import Caption from './components/caption';
import MainButton from './components/mainButton';
import MyLink from './components/myLink';
import Link from './components/link';
import MyField from './components/myField';
import MainContainer from './components/mainContainer';
import img from 'file-loader!../img/logo.png';

export const LoginBox = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	width: 50%;
	max-width: 450px;
	height: auto;
	padding: 20px 30px;
	margin-top: 10%;
	border: 1px solid #e3e3e3;
	background-color: #ffffff;
	@media (max-width: 600px) {
		width: 90%;
		max-width: 90%;
		padding: 5px;
		font-size: 1.6rem;
		margin: 10% auto 0 auto;
	}
`;
const RegistryFields = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 0;
	padding: 0;
	list-style: none;
`;
export class Login extends Component {
	constructor(props) {
		super(props);

		this.onLogin = (event) => {
			event.preventDefault();

			const userName = document.getElementById('loginUserName').value;
			const password = document.getElementById('loginPassword').value;
			let id = null;
			if (userName || password) {
				this.addWarning();
			}
			axios.get('https://5981a9d2139db000114a2d9c.mockapi.io/users')
				.then((usersData) => {
					store.dispatch({
						type: 'addUsers',
						users: usersData.data,
					});
					return store;
				}).then((storeObj) => {
					if (storeObj.getState().users.some((item) => {
						if (item.name === userName && item.password === password) {
							id = item.id;
							return true;
						}
						return false;
					})) {
						store.dispatch({
							type: 'login',
							id,
						});
						this.props.history.push('/main');
					} else this.addWarning();
				});
		};

		this.addWarning = () => {
			if (document.getElementsByClassName('warning')[0]) {
				return;
			}
			const warningBox = document.createElement('div');
			warningBox.classList.add('warning');
			warningBox.innerHTML = 'Incorrect username or password.';
			document.getElementById('loginBox').insertBefore(warningBox, document.getElementById('loginCaption'));
		};
	}
	componentWillMount() {
		if (localStorage.getItem('lp')) {
			this.props.history.push('/main');
		}
	}
	render() {
		return (
			<div className="box">
				<header className="header">
					<img className="logo" src={img} alt="" />
					<nav className="headerNav" status={this.props.status}>
						<Link header className="link" href="https://www.itechart.com/" target="_blank">about us</Link>
						<MyLink login onClick={this.onClick} header to="/">log in</MyLink>
					</nav>
				</header>
				<MainContainer>
					<LoginBox id="loginBox" method="post" action="">
						<Caption id="loginCaption">Sign in</Caption>
						<MyField id="loginUserName" type="text" placeholder="Login" />
						<MyField id="loginPassword" type="password" />
						<RegistryFields>
							<li><MyLink login to='/registration'>Create an account</MyLink></li>
							<li><MyLink login to='/login/identify'>Forgot password?</MyLink></li>
						</RegistryFields>
						<MainButton onClick={this.onLogin} id="login" type="submit" value="sign in"/>
					</LoginBox>
				</MainContainer>
			</div>
		);
	}
}

