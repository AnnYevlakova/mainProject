import React, { Component } from 'react';
import Caption from './caption';
import { Ul, Li } from './row';
import MyField from './myField';
import MainButton from './mainButton';

class UserInfoForUser extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div>
				<Caption cap>User Info</Caption>
				<Ul userInfo>
					<Li userInfo>
						<label>Username:
							<MyField userInfo id="userName" type="text" placeholder={this.props.store.getState().user.name} />
						</label>
					</Li>
					<Li userInfo>
						<label>Email address:
							<MyField userInfo id="email" type="text" placeholder={this.props.store.getState().user.email} />
						</label>
					</Li>
					<Li userInfo id="status">Status: {this.props.store.getState().user.status}</Li>
					<Li userInfo>
						<label>Password:
							<MyField userInfo id="password" type="text" placeholder={this.props.store.getState().user.password} />
						</label>
					</Li>
					<Li userInfo>Count of polls: {this.props.store.getState().user.polls}</Li>
					<Li userInfo>You was registered: {this.props.store.getState().user.registered}</Li>
					<Li userInfo>
						<MainButton onClick={this.saveUserData} userInfo type="button" value="save" />
					</Li>
				</Ul>
			</div>
		);
	}
}
export default UserInfoForUser;
