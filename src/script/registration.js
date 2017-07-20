import React, { Component } from 'react';
import { MainButton } from './components/main-button';
require('style-loader!css-loader!less-loader!../style/main-button.less');
require('style-loader!css-loader!less-loader!../style/registration.less');

export class Registration extends Component {
  render() {
    return (
      <div className="component-box">
        <form id="registration-box" method="post" action="" className="registration-box">
          <p className="caption">Регистрация</p>
          <input className="field" type="text" placeholder="Username" />
          <input className="field" type="text" placeholder="Login (email address)" />
          <input className="field" type="password" placeholder="Password" />
          <input className="field" type="password" placeholder="Repeat password" />
          <MainButton type="submit" value="create an account"></MainButton>
        </form>
      </div>
    )
  }
}