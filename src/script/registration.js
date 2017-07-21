import React, { Component } from 'react';
import {MainButton, Caption, MyField, MyLink} from './components';
import { LoginBox } from './login';

const RegistrationBox = LoginBox;

export class Registration extends Component {
  render() {
    return (
        <RegistrationBox>
          <Caption>Registration</Caption>
          <MyField type="text" placeholder="Username" />
          <MyField type="text" placeholder="Login (email address)" />
          <MyField type="password" placeholder="Password" />
          <MyField type="password" placeholder="Repeat password" />
					<MainButton id="registration" type="button" value="create an account" />
        </RegistrationBox>
    )
  }
}

