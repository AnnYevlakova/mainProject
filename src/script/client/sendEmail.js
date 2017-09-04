import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import validator from "validator";

import { sendEmailAction } from "./logic/actions/resetPasswordAction";

import Caption from "./commonComponents/caption";
import MainButton from "./commonComponents/mainButton";
import DefaultLink from "./commonComponents/defaultLink";
import RouterLink from "./commonComponents/routerLink";
import MainContainer from "./commonComponents/mainContainer";
import TextFieldGroup from "./commonComponents/textFieldGroup";
import DefaultForm from "./commonComponents/defaultForm";

import img from "file-loader!../../img/logo.png";

class SendEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            errors: {}
        };

        this.onChange = (event) => {
            this.setState({ [event.target.name]: event.target.value });
        };

        this.isValid = () => {
            const errors = {};

            if (!validator.isEmail(this.state.email)) {
                errors.email = "Email is invalid";
            }
            if (validator.isEmpty(this.state.email)) {
                errors.email = "Email is required";
            }

            return errors;
        };

        this.onSubmit = (e) => {
            e.preventDefault();
            const errors = this.isValid();

            if (!errors.email) {
                this.props.sendEmailAction(this.state.email).then((res) => {
                    if (res.length !== 0) {
                        this.props.history.push("/resetPassword");
                    } else {
                        errors.email = "There is no user with such email";
                        this.setState({ errors });
                    }
                });
            } else {
                this.setState({ errors });
            }
        };
    }

    componentWillMount() {
        if (localStorage.jwtToken) {
            this.props.history.push("/main");
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
                    <DefaultForm id="sendEmail" method="POST" onSubmit={this.onSubmit}>
                        {Object.keys(this.state.errors).length !== 0
                            ? <span className="warning">{this.state.errors[Object.keys(this.state.errors)[0]]}</span>
                            : ""
                        }
                        <Caption id="loginCaption">Reset your password</Caption>
                        <TextFieldGroup
                            field="email"
                            label="Enter your email address"
                            value={this.state.email}
                            errors={this.state.errors.email}
                            onChange={this.onChange}
                            type="text"
                        />
                        <MainButton
                            type="submit"
                            id="sendEmailBtn"
                            value="send email" />
                    </DefaultForm>
                </MainContainer>
            </div>
        );
    }
}

SendEmail.propTypes = {
    history: propTypes.object,
    sendEmailAction: propTypes.func,
};
export default connect(null, { sendEmailAction })(SendEmail);
