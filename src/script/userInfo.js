import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Caption from './components/caption';
import { Ul, Li } from './components/row';
import Div from './components/container';
import MyField from './components/myField';

export class UserInfo extends Component {
	constructor(props) {
		super(props);
		this.data = [];
	}
	componentDidMount() {
		if (store.getState().showProf === 'my') {
			ReactDOM.render(
				<Ul userInfo>
					<Li userInfo>{store.getState().user.name}</Li>
					<Li userInfo>{store.getState().user.email}</Li>
					<Li userInfo>{store.getState().user.registered}</Li>
					<Li userInfo>{store.getState().user.status}</Li>
					<Li userInfo>{store.getState().user.password}</Li>
				</Ul>,
				document.getElementById('userInfoBox'),
			);
		} else {
			const data = store.getState().users[store.getState().showProf - 1];
			ReactDOM.render(
				<div>
					<Caption cap>User Info</Caption>
					<Ul userInfo>
						<Li userInfo><label>Username: <MyField type="text" placeholder={data.name} /></label></Li>
						<Li userInfo><label>Email address: <MyField type="text" placeholder={data.email} /></label></Li>
						<Li userInfo>You was registered: {data.registered}</Li>
						<Li userInfo>Status: {data.status}</Li>
						<Li userInfo><label>Password: <MyField type="text" placeholder={data.password} /></label></Li>
					</Ul>
				</div>,
				document.getElementById('userInfoBox'),
			);
		}
	}
	render() {
		return (
			<Div id="userInfoBox" />
		);
	}
}
