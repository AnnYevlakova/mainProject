import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";

import img from "file-loader!../../img/logo.png";
import addMessage from "./logic/actions/addMessage";

import MainButton from "./commonComponents/mainButton";
import Caption from "./commonComponents/caption";
import RouterLink from "./commonComponents/routerLink";
import DefaultLink from "./commonComponents/defaultLink";
import MainContainer from "./commonComponents/mainContainer";
import TextFieldGroup from "./commonComponents/textFieldGroup";
import signupValidation from "./logic/validation/signupValidation";
import signupAction from "./logic/actions/signupAction";
import DefaultForm from "./commonComponents/defaultForm";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            pas1: "",
            pas2: "",
            errors: {},
        };

        this.onChange = (event) => {
            this.setState({ [event.target.name]: event.target.value });
        };

        this.isValid = () => {
            const { errors } = signupValidation(this.state);

            if (Object.keys(errors).length !== 0) {
                this.setState({ errors });
            }

            return Object.keys(errors).length === 0;
        };

        this.onRegistered = (event) => {
            event.preventDefault();

            if (this.isValid()) {
                this.props.signupAction(this.state).then((data) => {
                    if (data.errors) {
                        this.setState({ errors: data.errors });
                    } else {
                        this.props.addMessage("You signed up successfully.");
                        this.props.history.push("/");
                    }
                });
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
                        <RouterLink onClick={this.onClick} header to="/">log in</RouterLink>
                    </nav>
                </header>
                <MainContainer>
                    <DefaultForm id="registrationBox">
                        {Object.keys(this.state.errors)[0]
                            ? <span className="warning">{this.state.errors[Object.keys(this.state.errors)[0]]}</span>
                            : ""
                        }
                        <Caption id="registryCaption">Registration</Caption>
                        <TextFieldGroup
                            type="text"
                            errors={this.state.errors.username}
                            label="Username"
                            onChange={this.onChange}
                            value={this.state.username}
                            field="username"
                        />
                        <TextFieldGroup
                            type="text"
                            errors={this.state.errors.email}
                            label="Email"
                            onChange={this.onChange}
                            value={this.state.email}
                            field="email"
                        />
                        <TextFieldGroup
                            type="text"
                            errors={this.state.errors.pas1}
                            label="Password"
                            onChange={this.onChange}
                            value={this.state.pas1}
                            field="pas1"
                        />
                        <TextFieldGroup
                            type="text"
                            errors={this.state.errors.pas2}
                            label="Password Confirmation"
                            onChange={this.onChange}
                            value={this.state.pas2}
                            field="pas2"
                        />
                        <MainButton
                            type="submit"
                            onClick={this.onRegistered}
                            id="registration"
                            value="Create an account" />
                    </DefaultForm>
                </MainContainer>
            </div>
        );
    }
}
Registration.propTypes = {
    signupAction: propTypes.func.isRequired,
    addMessage: propTypes.func,
    history: propTypes.object,
};
export default connect(null, { signupAction, addMessage })(Registration);
