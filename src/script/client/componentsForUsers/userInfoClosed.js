import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

import Caption from "../commonComponents/caption";
import { Row, Col } from "../commonComponents/row&col";
import MainButton from "../commonComponents/mainButton";

class UserInfoClosed extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const userPolls = this.props.polls.filter(item => item.user === this.props.data.id);

        return (
            <div>
                <Caption cap>User Info</Caption>
                <Row userInfo>
                    <Col userInfo>Username: {this.props.data.username}</Col>
                    <Col userInfo>Email address: {this.props.data.email}</Col>
                    <Col userInfo>Status: {this.props.data.status}</Col>
                    <Col userInfo>Count of polls: {userPolls.length}</Col>
                    <Col userInfo>User was registered: {this.props.data.registered}</Col>
                    <Col userInfo>
                        <MainButton onClick={this.props.back} inline type="button" value="back" />
                    </Col>
                </Row>
            </div>
        );
    }
}

UserInfoClosed.propTypes = {
    data: propTypes.object,
    polls: propTypes.array,
    back: propTypes.func,
};

function mapStateToProps(state) {
    return {
        id: state.target,
        polls: state.polls,
    };
}

export default connect(mapStateToProps)(UserInfoClosed);
