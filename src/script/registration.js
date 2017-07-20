import React, { Component } from 'react';
import { MainButton } from './components/main-button';
require('style-loader!css-loader!less-loader!../style/main-button.less');

export class Registration extends Component {
  render() {
    return (
      <div>
        <p>Регистрация</p>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Login (email address)" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Repeat password" />
        <MainButton type="submit" value="create account"></MainButton>
      </div>
    )
  }
}