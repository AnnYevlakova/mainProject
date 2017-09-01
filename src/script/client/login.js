import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import propTypes from "prop-types";

import loginValidation from "./logic/validation/loginValidation";
import loginAction from "./logic/actions/loginAction";

import Caption from "./commonComponents/caption";
import MainButton from "./commonComponents/mainButton";
import DefaultLink from "./commonComponents/defaultLink";
import RouterLink from "./commonComponents/routerlink";
import MainContainer from "./commonComponents/mainContainer";
import TextFieldGroup from "./commonComponents/textFieldGroup";
import DefaultForm from "./commonComponents/defaultForm";

import img from "file-loader!../../img/logo.png";


const RegistryFields = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 0;
	padding: 0;
	list-style: none;
`;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            errors: {}
        };

        this.onChange = (event) => {
            this.setState({ [event.target.name]: event.target.value });
        };

        this.isValid = () => {
            const { errors } = loginValidation(this.state);

            if (Object.keys(errors).length !== 0) {
                this.setState({ errors });
            }

            return Object.keys(errors).length === 0;
        };

        this.onLogin = (event) => {
            event.preventDefault();

            if (this.isValid()) {
                this.props.loginAction(this.state).then((data) => {
                    if (data) {
                        this.setState({ errors: data.errors });
                    } else {
                        this.props.history.push("/main");
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
                        <RouterLink login onClick={this.onClick} header to="/">log in</RouterLink>
                    </nav>
                </header>
                <MainContainer>
                    <DefaultForm id="loginBox" method="post" action="">
                        {this.props.message
                            ? <span className="flashMessage">{this.props.message}</span>
                            : ""
                        }
                        {Object.keys(this.state.errors)[0]
                            ? <span className="warning">{this.state.errors[Object.keys(this.state.errors)[0]]}</span>
                            : ""
                        }
                        <Caption id="loginCaption">Sign in</Caption>
                        <TextFieldGroup
                            field="login"
                            label="Login"
                            value={this.state.login}
                            errors={this.state.errors.login}
                            onChange={this.onChange}
                            type="text"
                        />
                        <TextFieldGroup
                            field="password"
                            label="Password"
                            value={this.state.password}
                            errors={this.state.errors.password}
                            onChange={this.onChange}
                            type="password"
                        />
                        <RegistryFields>
                            <li><RouterLink login to="/registration">Create an account</RouterLink></li>
                            <li><RouterLink login to="/sendEmail">Forgot password?</RouterLink></li>
                        </RegistryFields>
                        <MainButton
                            type="submit"
                            onClick={this.onLogin}
                            id="login"
                            value="sign in" />
                    </DefaultForm>
                </MainContainer>
            </div>
        );
    }
}

Login.propTypes = {
    loginAction: propTypes.func,
    history: propTypes.object,
    message: propTypes.string,
};

function mapStateToProps(state) {
    return {
        message: state.message
    };
}

export default connect(mapStateToProps, { loginAction })(Login);
