import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import store from '../logic/store';

import Container from '../commonComponents/container';
import UserInfoForAdmin from './userInfoForAdmin';
import UserInfoForUser from './userInfoForUser';
import UserInfoClosed from './userInfoClosed';

class UserInfo extends Component {
	constructor(props) {
		super(props);
		this.data = [];

		this.saveUserData = () => {
			const userName = document.getElementById('userName').value || this.data.name || store.getState().user.name;
			const email = document.getElementById('email').value || this.data.email || store.getState().user.email;
			const status = document.getElementById('status').value || this.data.status || store.getState().user.status;
			const password = document.getElementById('password').value || this.data.password || store.getState().user.password;

			axios.put(`https://5981a9d2139db000114a2d9c.mockapi.io/users/${this.data.id || store.getState().user.id}`, {
				id: this.data.id || store.getState().user.id,
				registered: this.data.registered || store.getState().registered,
				name: userName,
				email,
				status,
				polls: this.data.polls || store.getState().user.polls,
				password,
			});
		};
	}

	componentDidMount() {
		if (store.getState().showProf === 'my' && store.getState().user.status === 'user') {
			ReactDOM.render(
				<UserInfoForUser save={this.saveUserData} store={store}/>,
				document.getElementById('userInfoBox'),
			);
		} else if (store.getState().showProf === 'my' && store.getState().user.status === 'admin') {
			ReactDOM.render(
				<UserInfoForAdmin save={this.saveUserData} data={store.getState().user}/>,
				document.getElementById('userInfoBox'),
			);
		} else if (store.getState().user.status === 'admin') {
			this.data = store.getState().users[store.getState().showProf];
			ReactDOM.render(
				<UserInfoForAdmin save={this.saveUserData} data={this.data}/>,
				document.getElementById('userInfoBox'),
			);
		} else {
			this.data = store.getState().users[store.getState().showProf];
			ReactDOM.render(
				<UserInfoClosed save={this.saveUserData} data={this.data}/>,
				document.getElementById('userInfoBox'),
			);
		}
	}

	render() {
		return (
			<Container id="userInfoBox" />
		);
	}
}
export default UserInfo;
