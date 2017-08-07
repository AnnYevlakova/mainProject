import React, { Component } from 'react';
import store from '../store';
import axios from 'axios';
import Caption from './caption';
import { Ul, Li } from './row';
import MyField from './myField';
import MainButton from './mainButton';

class UserInfoForAdmin extends Component {
	constructor(props) {
		super(props);
		this.back = () => {
			history.back();
		};
		this.delete = () => {
			const id = store.getState().showProf;
			axios.delete(`https://5981a9d2139db000114a2d9c.mockapi.io/users/${id}`)
				.then((response) => {
					store.dispatch({ type: 'deleteItem', id });
					history.back();
				});
		};
	}
	render() {
		return(
			<div>
				<Caption cap>User Info</Caption>
				<Ul userInfo>
					<Li userInfo>
						<label>Username: <MyField userInfo id="userName" type="text" placeholder={this.props.data.name} /></label>
					</Li>
					<Li userInfo>
						<label>Email address: <MyField id="email" userInfo type="text" placeholder={this.props.data.email} /></label>
					</Li>
					<Li userInfo>
						<label>Status: <MyField userInfo id="status" type="text" placeholder={this.props.data.status} /></label>
					</Li>
					<Li userInfo>
						<label>Password: <MyField userInfo id="password" type="text" placeholder={this.props.data.password} /></label>
					</Li>
					<Li userInfo>Count of polls: {this.props.data.polls}</Li>
					<Li userInfo>You was registered: {this.props.data.registered}</Li>
					<Li userInfo>
						<MainButton onClick={this.back} userInfo type="button" value="back" />
						<MainButton onClick={this.saveUserData} userInfo type="button" value="save" />
						<MainButton onClick={this.delete} userInfo type="button" value="delete" />
					</Li>
				</Ul>
			</div>
		);
	}
}
export default UserInfoForAdmin;
