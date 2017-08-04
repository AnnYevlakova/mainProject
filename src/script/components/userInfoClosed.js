import React, { Component } from 'react';
import Caption from './caption';
import { Ul, Li } from './row';

class UserInfoClosed extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div>
				<Caption cap>User Info</Caption>
				<Ul userInfo>
					<Li userInfo>Username: {this.props.data.name}</Li>
					<Li userInfo>Email address: {this.props.data.email}</Li>
					<Li userInfo>Status: {this.props.data.status}</Li>
					<Li userInfo>Count of polls: {this.props.data.polls}</Li>
					<Li userInfo>You was registered: {this.props.data.registered}</Li>
				</Ul>
			</div>
		);
	}
}
export default UserInfoClosed;
