import React, { Component } from 'react';
import { MainButton, MyLink, Caption, MyField } from './components';
import styled from 'styled-components';

export class Login extends Component {
  render() {
    return (
        <LoginBox id="login-box" method="post" action="">
					<Caption>Sing in</Caption>
          <MyField type="text" placeholder="Login" />
          <MyField type="password" />
          <RegistryFields>
						<li><MyLink to='/registration'>Create an account</MyLink></li>
						<li><MyLink to='/login/identify'>Forgot password?</MyLink></li>
          </RegistryFields>
          <MainButton id="login" type="submit" value="sign in"/>
        </LoginBox>
    )
  }
}

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

