import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MainButton } from './components/main-button';
require('style-loader!css-loader!less-loader!../style/login.less');

export class Login extends Component {
  render() {
    return (
      <div className="component-box">
        <div className="registration-box">
          <p className="caption">Sing in</p>
          <input className="field" type="text" placeholder="Login" />
          <input className="field" type="password" />
          <ul className="registry-field">
            <li><Link  className="link-base" to='/registration'>Create an account</Link></li>
            <li><Link className="link-base" to='/login/identify'>Forgot password?</Link></li>
          </ul>
          <MainButton type="submit" value="sing in"></MainButton>
        </div>
      </div>
    )
  }
}
