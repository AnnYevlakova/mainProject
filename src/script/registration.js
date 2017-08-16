import React, { Component } from 'react';
import axios from 'axios';

import img from 'file-loader!../img/logo.png';
import store from './logic/store';

import MainButton from './commonComponents/mainButton';
import DefaultField from './commonComponents/defaultField';
import Caption from './commonComponents/caption';
import RouterLink from './commonComponents/routerLink';
import DefaultLink from './commonComponents/defaultLink';
import MainContainer from './commonComponents/mainContainer';
import { LoginBox } from './login';

const RegistrationBox = LoginBox;

class Registration extends Component {
	constructor(props) {
		super(props);

		this.onFocus = (event) => {
			event.target.classList.remove('wrong');
		};

		this.checkPassword = () => {
			const pas1 = document.getElementById('pas1').value;
			const pas2 = document.getElementById('pas2').value;

			if (!pas1 || !pas2) return false;

			return pas1 !== pas2 ? false : pas1;
		};

		this.checkEmail = () => {
			const email = document.getElementById('email').value;

			return email.search(/.+@.+\..+/i) !== -1;
		};

		this.checkUserName = () => {
			const userName = document.getElementById('userName').value;

			return userName || !store.getState().users.some(item => item.name === userName);
		};

		this.onRegistered = (event) => {
			event.preventDefault();

			const userName = document.getElementById('userName').value;
			const email = document.getElementById('email').value;
			const dateNow = new Date();
			const date = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`;

			if (!this.checkPassword() || !this.checkEmail() || !this.checkUserName() || !userName) {
				if (!this.checkPassword()) {
					this.addWarning('Passwords do not match. Try again.');
					document.getElementById('pas1').classList.add('wrong');
					document.getElementById('pas2').classList.add('wrong');
				}
				if (!this.checkEmail()) {
					this.addWarning('Email address is incorrect. Try again.');
					document.getElementById('email').classList.add('wrong');
				}
				if (!this.checkUserName()) {
					this.addWarning('This Username exists. Try again.');
					document.getElementById('userName').classList.add('wrong');
				}
				if (!userName) {
					this.addWarning('Enter your Username.');
					document.getElementById('userName').classList.add('wrong');
				}

				return;
			} else {
				axios.post('https://5981a9d2139db000114a2d9c.mockapi.io/users/',
					{
						id: store.getState().users.length + 1,
						registered: date,
						name: userName,
						email,
						status: 'user',
						polls: [],
						password: this.checkPassword(),
					});
				this.props.history.push('/');
			}
		};

		this.addWarning = (text) => {
			const warningBox = document.createElement('div');

			if (document.getElementsByClassName('warning')[0]) {
				document.getElementsByClassName('warning')[0].remove();
			}
			warningBox.classList.add('warning');
			warningBox.innerHTML = text;
			document.getElementById('registrationBox').insertBefore(warningBox, document.getElementById('registryCaption'));
		};
	}

	componentWillMount() {
		if (localStorage.getItem('user')) {
			this.props.history.push('/main');
		}
	}

	render() {
		return (
			<div className="box">
				<header className="header">
					<img className="logo" src={img} alt="" />
					<nav className="headerNav">
						<DefaultLink header className="link" href="https://www.itechart.com/" target="_blank">about us</DefaultLink>
						<RouterLink onClick={this.onClick} header to="/">log in</RouterLink>
					</nav>
				</header>
				<MainContainer>
					<RegistrationBox id="registrationBox">
						<Caption id="registryCaption">Registration</Caption>
						<DefaultField onFocus={this.onFocus} id="userName" type="text" placeholder="Username" />
						<DefaultField onFocus={this.onFocus} id="email" type="text" placeholder="Email address" />
						<DefaultField onFocus={this.onFocus} id="pas1" type="password" placeholder="Password" />
						<DefaultField onFocus={this.onFocus} id="pas2" type="password" placeholder="Repeat password" />
						<MainButton onClick={this.onRegistered} id="registration" type="button" value="create an account" />
					</RegistrationBox>
				</MainContainer>
			</div>
		);
	}
}
export default Registration;
