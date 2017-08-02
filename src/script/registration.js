import React, { Component } from 'react';
import axios from 'axios';
import MainButton from './components/mainButton';
import MyField from './components/myField';
import Caption from './components/caption';
import Link from './components/link';
import MyLink from './components/myLink';
import MainContainer from './components/mainContainer';
import { LoginBox } from './login';
import img from 'file-loader!../img/logo.png';

const RegistrationBox = LoginBox;

class Registration extends Component {
	constructor(props) {
		super(props);
		this.users = [];
		this.usersCount = 0;

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

			return !this.users.some(item => item.name === userName);
		};

		this.onRegistered = (event) => {
			event.preventDefault();

			const userName = document.getElementById('userName').value;
			const email = document.getElementById('email').value;
			const date = +(new Date());

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
				axios.post('https://5981a9d2139db000114a2d9c.mockapi.io/users/',
					{
						id: this.usersCount + 1,
						registered: date,
						name: userName,
						email,
						status: 'user',
						polls: 0,
						password: this.checkPassword(),
					});
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
	componentDidMount() {
		axios.get('https://5981a9d2139db000114a2d9c.mockapi.io/users')
			.then((data) => {
				this.users = data.data;
				this.usersCount = data.data.length;
				return this.users;
			});
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
