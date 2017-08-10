import React, { Component } from 'react';

import Caption from '../commonComponents/caption';
import { Row, Col } from '../commonComponents/row&col';
import MainButton from '../commonComponents/mainButton';

class UserInfoClosed extends Component {
	constructor(props) {
		super(props);

		this.back = () => {
			history.back();
		};
	}

	render() {
		return(
			<div>
				<Caption cap>User Info</Caption>
				<Row userInfo>
					<Col userInfo>Username: {this.props.data.name}</Col>
					<Col userInfo>Email address: {this.props.data.email}</Col>
					<Col userInfo>Status: {this.props.data.status}</Col>
					<Col userInfo>Count of polls: {this.props.data.polls.length}</Col>
					<Col userInfo>You was registered: {this.props.data.registered}</Col>
					<Col userInfo>
						<MainButton onClick={this.back} inline type="button" value="back" />
					</Col>
				</Row>
			</div>
		);
	}
}
export default UserInfoClosed;
