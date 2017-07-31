import React, { Component } from 'react';
import MainButton from './components/mainButton';
import MyField from './components/myField';
import Caption from './components/caption';
import Link from './components/link';
import MyLink from './components/myLink';
import MainContainer from './components/mainContainer';
import { LoginBox } from './login';
import img from 'file-loader!../img/logo.png';

const data = require('./data.json');
const RegistrationBox = LoginBox;

class Registration extends Component {
	constructor(props) {
		super(props);

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
			return data[userName] === undefined;
		};

		this.onRegistered = (event) => {
			event.preventDefault();

			const userName = document.getElementById('userName').value;
			const email = document.getElementById('email').value;
			const date = `${new Date().getFullYear()}-${new Date().getMonth() + 1} - ${new Date().getDate()}`;

			if (!this.checkUserName()) {
				this.addWarning('This Username exists. Try again.');
				return;
			}
			if (!this.checkEmail()) {
				this.addWarning('Email address is incorrect. Try again.');
				return;
			}
			if (!this.checkPassword()) {
				this.addWarning('Passwords do not match. Try again.');
				return;
			}
			if (!userName) {
				this.addWarning('Enter your Username.');
				return;
			} else {
				data[userName] = {
					email,
					status: 'user',
					registered: date,
					polls: 0,
					actions: false,
					password: this.checkPassword(),
				};
				this.props.history.push('/');
			}
		};

		this.addWarning = (text) => {
			if (document.getElementsByClassName('warning')[0]) {
				document.getElementsByClassName('warning')[0].remove();
			}
			const warningBox = document.createElement('div');

			warningBox.classList.add('warning');
			warningBox.innerHTML = text;
			document.getElementById('registrationBox').insertBefore(warningBox, document.getElementById('registryCaption'));
		};
	}
	render() {
		return (
			<div className="box">
				<header className="header">
					<img className="logo" src={img} alt="" />
					<nav className="headerNav">
						<Link header className="link" href="https://www.itechart.com/" target="_blank">about us</Link>
						<MyLink onClick={this.onClick} header to="/">log in</MyLink>
					</nav>
				</header>
				<MainContainer>
					<RegistrationBox id="registrationBox">
						<Caption id="registryCaption">Registration</Caption>
						<MyField id="userName" type="text" placeholder="Username" />
						<MyField id="email" type="text" placeholder="Email address" />
						<MyField id="pas1" type="password" placeholder="Password" />
						<MyField id="pas2" type="password" placeholder="Repeat password" />
						<MainButton onClick={this.onRegistered} id="registration" type="button" value="create an account" />
					</RegistrationBox>
				</MainContainer>
			</div>
		);
	}
}
export default Registration;
