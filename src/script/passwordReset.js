import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";

import addMessage from "./logic/actions/addMessage";
import passwordResetValidation from "./logic/validation/passwordResetValidation";

import Caption from "./commonComponents/caption";
import MainButton from "./commonComponents/mainButton";
import DefaultLink from "./commonComponents/defaultLink";
import RouterLink from "./commonComponents/routerlink";
import MainContainer from "./commonComponents/mainContainer";
import TextFieldGroup from "./commonComponents/textFieldGroup";
import DefaultForm from "./commonComponents/defaultForm";

import img from "file-loader!../img/logo.png";

class PasswordReset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            errors: {}
        };

        this.onChange = (event) => {
            this.setState({ [event.target.name]: event.target.value });
        };

        this.onSubmit = (e) => {
            e.preventDefault();
            const { errors } = passwordResetValidation(this.state);

            if (Object.keys(errors).length === 0) {
                /*  axios({
                    method: "post",
                    url: "send.php",
                    data: { email: this.state.email },
                    dataType: "json"
                });*/

                this.props.addMessage("We sent you a link to reset your password.");
                this.props.history.push("/");
            }
            this.setState({ errors });
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
                    <DefaultForm id="passwordReset" method="post" action="" onSubmit={this.onSubmit}>
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
                            id="passwordResetBtn"
                            value="send password reset email" />
                    </DefaultForm>
                </MainContainer>
            </div>
        );
    }
}

PasswordReset.propTypes = {
    history: propTypes.object,
    addMessage: propTypes.func,
};
export default connect(null, { addMessage })(PasswordReset);
