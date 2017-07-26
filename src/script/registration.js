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

export class Registration extends Component {
	constructor(props) {
		super(props);

		this.checkPassword = () => {
			const pas1 = document.getElementById('pas1').value;
			const pas2 = document.getElementById('pas2').value;
			if (pas1 !== pas2) {
				this.addWarning();
				return false;
			} 
			return pas1;
		};

		this.onRegistered = (event) => {
			event.preventDefault();

			const userName = document.getElementById('userName').value;
			const login = document.getElementById('registryLogin').value;

			if (this.checkPassword() && userName && login) {
				data[login] = {
					name: login,
					password: this.checkPassword(),
					status: 'user'
				};
				this.props.history.push('/');
			} else {
				this.addWarning();
			}
		};

		this.addWarning = () => {
			if(document.getElementsByClassName('warning')[0]) {
				return;
			}
			const warningBox = document.createElement('div');

			warningBox.classList.add('warning');
			warningBox.innerHTML = 'There were problems creating your account. Try again.';
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
						<MyField id="registryLogin" type="text" placeholder="Login (email address)" />
						<MyField id="pas1" type="password" placeholder="Password" />
						<MyField id="pas2" type="password" placeholder="Repeat password" />
						<MainButton onClick={this.onRegistered} id="registration" type="button" value="create an account" />
					</RegistrationBox>
				</MainContainer>
			</div>
    	);
  	}
}
