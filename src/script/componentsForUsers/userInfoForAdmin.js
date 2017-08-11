import React, { Component } from 'react';
import axios from 'axios';

import store from '../logic/store';

import Caption from '../commonComponents/caption';
import { Row, Col } from '../commonComponents/row&col';
import DefaultField from '../commonComponents/defaultField';
import MainButton from '../commonComponents/mainButton';

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
					store.dispatch({ type: 'deleteUser', id });
					history.back();
				});
		};
	}

	render() {
		return(
			<div>
				<Caption cap>User Info</Caption>
				<Row userInfo>
					<Col userInfo>
						<label>Username: <DefaultField userInfo id="userName" type="text" placeholder={this.props.data.name} /></label>
					</Col>
					<Col userInfo>
						<label>Email address: <DefaultField id="email" userInfo type="text" placeholder={this.props.data.email} /></label>
					</Col>
					<Col userInfo>
						<label>Status: <DefaultField userInfo id="status" type="text" placeholder={this.props.data.status} /></label>
					</Col>
					<Col userInfo>
						<label>Password: <DefaultField userInfo id="password" type="text" placeholder={this.props.data.password} /></label>
					</Col>
					<Col userInfo>Count of polls: {this.props.data.polls.length}</Col>
					<Col userInfo>You was registered: {this.props.data.registered}</Col>
					<Col userInfo>
						<MainButton onClick={this.back} inline type="button" value="back" />
						<MainButton onClick={this.props.save} inline type="button" value="save" />
						<MainButton onClick={this.delete} inline type="button" value="delete" />
					</Col>
				</Row>
			</div>
		);
	}
}
export default UserInfoForAdmin;
