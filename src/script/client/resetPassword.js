import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";

import addMessage from "./logic/actions/addMessage";
import resetPasswordValidation from "./logic/validation/resetPasswordValidation";
import { resetPasswordAction, sendEmailAction } from "./logic/actions/resetPasswordAction";

import Caption from "./commonComponents/caption";
import MainButton from "./commonComponents/mainButton";
import DefaultLink from "./commonComponents/defaultLink";
import RouterLink from "./commonComponents/routerLink";
import MainContainer from "./commonComponents/mainContainer";
import TextFieldGroup from "./commonComponents/textFieldGroup";
import DefaultForm from "./commonComponents/defaultForm";

import img from "file-loader!../../img/logo.png";

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pas1: "",
            pas2: "",
            errors: {}
        };

        this.onChange = (event) => {
            this.setState({ [event.target.name]: event.target.value });
        };

        this.isValid = () => {
            const errors = resetPasswordValidation(this.state);

            if (Object.keys(errors).length !== 0) {
                this.setState({ errors });
            }

            return Object.keys(errors).length === 0;
        };

        this.onSubmit = (e) => {
            e.preventDefault();

            if (this.isValid()) {
                this.props.resetPasswordAction(this.props.email, this.state.pas1).then((res) => {
                    if (res === 200) {
                        this.props.addMessage("Your password was successfully reset.");
                        this.props.history.push("/");
                    } else {
                        const { errors } = res;
                        this.setState({ errors });
                    }
                });
            }
        };
    }

    componentWillMount() {
        if (localStorage.jwtToken) {
            this.props.history.push("/main");
        }
        if (this.props.email === undefined && localStorage.email) {
            this.props.sendEmailAction(localStorage.getItem("email"));
        } else if (!localStorage.email) {
            this.props.history.push("/sendEmail");
        }
    }

    render() {
        return (
            <div className="box">
                <header className="header">
                    <img className="logo" src={img} alt="" />
                    <nav className="headerNav">
                        <DefaultLink header className="link" href="https://www.itechart.com/" target="_blank">about us</DefaultLink>
                        <RouterLink login header to="/">log in</RouterLink>
                    </nav>
                </header>
                <MainContainer>
                    <DefaultForm id="resetPassword" method="POST" onSubmit={this.onSubmit}>
                        {Object.keys(this.state.errors).length !== 0
                            ? <span className="warning">{this.state.errors[Object.keys(this.state.errors)[0]]}</span>
                            : ""
                        }
                        <Caption id="loginCaption">Reset your password</Caption>
                        <TextFieldGroup
                            field="pas1"
                            label="Enter new password"
                            value={this.state.pas1}
                            errors={this.state.errors.pas1}
                            onChange={this.onChange}
                            type="password"
                        />
                        <TextFieldGroup
                            field="pas2"
                            label="Password Confirmation"
                            value={this.state.pas2}
                            errors={this.state.errors.pas2}
                            onChange={this.onChange}
                            type="password"
                        />
                        <MainButton
                            type="submit"
                            id="passwordResetBtn"
                            value="reset password" />
                    </DefaultForm>
                </MainContainer>
            </div>
        );
    }
}

ResetPassword.propTypes = {
    history: propTypes.object,
    resetPasswordAction: propTypes.func,
    sendEmailAction: propTypes.func,
    addMessage: propTypes.func,
    email: propTypes.string,
};

function mapStateToProps(state) {
    return {
        email: state.email
    };
}
export default connect(mapStateToProps, { addMessage, resetPasswordAction, sendEmailAction })(ResetPassword);
