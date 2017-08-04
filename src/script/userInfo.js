import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import store from './store';
import Div from './components/container';
import UserInfoForAdmin from './components/userInfoForAdmin';
import UserInfoForUser from './components/userInfoForUser';
import UserInfoClosed from './components/userInfoClosed';

export class UserInfo extends Component {
	constructor(props) {
		super(props);
		this.data = [];
		this.saveUserData = () => {
			const userName = document.getElementById('userName').value || this.data.name || store.getState().user.name;
			const email = document.getElementById('email').value || this.data.email || store.getState().user.email;
			const status = document.getElementById('status').value || this.data.status || store.getState().user.status;
			const password = document.getElementById('status').value || this.data.password || store.getState().user.password;
			axios.put(`https://5981a9d2139db000114a2d9c.mockapi.io/users/${this.data.id || store.getState().user.id}`, {
				id: this.data.id || store.getState().user.id,
				registered: this.data.registered || store.getState().registered,
				name: userName,
				email,
				status,
				polls: this.data.polls || store.getState().polls,
				password,
			});
		};
	}
	componentDidMount() {
		if (store.getState().showProf === 'my' && store.getState().user.status === 'user') {
			ReactDOM.render(
				<UserInfoForUser store={store}/>,
				document.getElementById('userInfoBox'),
			);
		} else if (store.getState().showProf === 'my' && store.getState().user.status === 'admin') {
			ReactDOM.render(
				<UserInfoForAdmin data={store.getState().user}/>,
				document.getElementById('userInfoBox'),
			);
		} else if (store.getState().user.status === 'admin') {
			this.data = store.getState().users[store.getState().showProf - 1];
			ReactDOM.render(
				<UserInfoForAdmin data={this.data}/>,
				document.getElementById('userInfoBox'),
			);
		} else {
			this.data = store.getState().users[store.getState().showProf - 1];
			ReactDOM.render(
				<UserInfoClosed data={this.data}/>,
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
