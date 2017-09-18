import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import classnames from "classnames";

import { resetUserDataAction } from "../logic/actions/userActions";
import passwordValidation from "../logic/validation/passwordValidation";

import Caption from "../commonComponents/caption";
import { Row, Col } from "../commonComponents/row&col";
import DefaultField from "../commonComponents/defaultField";
import MainButton from "../commonComponents/mainButton";

class UserInfoForAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
        };

        this.saveUserData = () => {
            const errors = passwordValidation();

            if (Object.keys(errors).length !== 0) {
                document.getElementById("pas2").value = "";
                this.setState({ errors });

                return;
            }

            const id = this.props.id === "my" ? this.props.user.id : this.props.id;
            const user = this.props.users.filter(item => item.id === id)[0];
            const password = document.getElementById("pas1").value === document.getElementById("pas2").value
                ? document.getElementById("pas1").value
                : user.password;

            const userData = {
                id,
                registered: user.registered,
                username: document.getElementById("username").value || user.username,
                email: document.getElementById("email").value || user.email,
                status: document.getElementById("status").value || user.status,
                password,
            };
            let isEqual = true;

            for (const key in user) {
                if (user[key] !== this.state[key]) {
                    isEqual = false;
                }
            }
            if (!isEqual) {
                this.props.resetUserDataAction(userData);
            }
        };
    }

    render() {
        const userPolls = this.props.polls.filter(item => item.user === this.props.data.id);

        return (
            <div>
                <Caption cap>User Info</Caption>
                <Row userInfo>
                    <Col userInfo>
                        <label>Username: <DefaultField
                            userInfo
                            id="username"
                            type="text"
                            placeholder={this.props.data.username}/>
                        </label>
                    </Col>
                    <Col userInfo>
                        <label>Email address: <DefaultField
                            id="email"
                            userInfo
                            type="text"
                            placeholder={this.props.data.email}/>
                        </label>
                    </Col>
                    <Col userInfo>
                        <label>Status: <DefaultField
                            userInfo
                            id="status"
                            type="text"
                            placeholder={this.props.data.status}/>
                        </label>
                    </Col>
                    <Col userInfo>Count of polls: {userPolls.length}</Col>
                    <Col userInfo>You was registered: {this.props.data.registered}</Col>
                    <Col userInfo>
                        <label>New password:
                            <DefaultField
                                userInfo
                                id="pas1"
                                type="password"
                            />
                        </label>
                        <label>Password confirmation:
                            <DefaultField
                                userInfo
                                withError
                                id="pas2"
                                type="password"
                                className={classnames({ "wrong": this.state.errors.pas2 })}
                                placeholder={this.state.errors.pas2}
                            />
                        </label>
                    </Col>

                    <Col userInfo>
                        <MainButton onClick={this.props.back} inline type="button" value="back" />
                        <MainButton onClick={this.saveUserData} inline type="button" value="save" />
                        <MainButton onClick={this.props.delete} inline type="button" value="delete" />
                    </Col>
                </Row>
            </div>
        );
    }
}

UserInfoForAdmin.propTypes = {
    data: propTypes.object,
    delete: propTypes.func,
    id: propTypes.string,
    user: propTypes.object,
    users: propTypes.array,
    history: propTypes.object,
    resetUserDataAction: propTypes.func,
    polls: propTypes.array,
    back: propTypes.func,
};

function mapStateToProps(state) {
    return {
        id: state.target,
        user: state.user,
        users: state.users,
        polls: state.polls,
    };
}

export default connect(mapStateToProps, { resetUserDataAction })(UserInfoForAdmin);
