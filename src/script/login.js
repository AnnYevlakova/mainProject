import React, { Component } from 'react';
import { MainButton } from './components/main-button';
import styled from 'styled-components';
import { MyLink } from './components/my-link'
require('style-loader!css-loader!less-loader!../style/login.less');

export class Login extends Component {
  render() {
    return (
      <div className="component-box">
        <LoginBox id="login-box" method="post" action="">
          <p className="caption">Sing in</p>
          <input className="field" type="text" placeholder="Login" />
          <input className="field" type="password" />
          <ul className="registry-field">
            <li><MyLink to='/registration' value="Create an account"/></li>
            <li><MyLink to='/login/identify' value="Forgot password?"/></li>
          </ul>
          <MainButton type="submit" value="sing in"/>
        </LoginBox>
      </div>
    )
  }
}

const LoginBox = styled.form`
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
`;
