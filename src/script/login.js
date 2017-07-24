import React, { Component } from 'react';
import styled from 'styled-components';
import Caption from './components/caption';
import MainButton from './components/mainButton';
import MyLink from './components/myLink';
import MyField from './components/myField';

const data = require('./data.json');

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
	@media (max-width: 600px) {
		width: 90%;
		max-width: 90%;
		padding: 5px;
		font-size: 1.6rem;
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
const Warningbox = styled.div`
	
`;
export class Login extends Component {
	constructor(props) {
		super(props);
		this.form = document.getElementById('login-box');
		this.onLogin = (event) => {
			event.preventDefault();
			/*const key = this.form.loginUserName.value;
			const password = this.form.loginPassword.value;

			if (key in data) {
				if (data[key].password === password) {
					this.props.history.push('/user');
				}
				else console.log('!');
			}*/ /*else this.addWarning();*/
			document.getElementById('main-container').setAttribute('logout', 'false');
		};
		/*this.addWarning = () => {
			WarningBox.innerHTML = 'Incorrect username or password.';
			this.form.insertBefore(warningBox, document.getElementById('loginCaption'));
		}*/
	}
	render() {
		return (
			<LoginBox id="login-box" method="post" action="">
				<Caption id="loginCaption">Sing in</Caption>
				<MyField required="true" name="loginUserName" type="text" placeholder="Login" />
				<MyField required name="loginPassword" type="password" />
				<RegistryFields>
					<li><MyLink to='/registration'>Create an account</MyLink></li>
					<li><MyLink to='/login/identify'>Forgot password?</MyLink></li>
				</RegistryFields>
				<MainButton onClick={this.onLogin} id="login" type="submit" value="sign in"/>
			</LoginBox>
		);
	}
}

