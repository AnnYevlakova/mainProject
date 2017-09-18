import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import propTypes from "prop-types";

import store from "../logic/store";
import { deleteUserAction } from "../logic/actions/userActions";
import { deletePollAction } from "../logic/actions/pollActions";

import Container from "../commonComponents/container";
import UserInfoForAdmin from "./userInfoForAdmin";
import UserInfoForUser from "./userInfoForUser";
import UserInfoClosed from "./userInfoClosed";

class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.back = () => {
            this.props.history.goBack();
        };

        this.delete = () => {
            let id = this.props.id;

            if (id === "my") {
                id = this.props.user.id;
                document.getElementById("logOut").click();
            }
            this.props.deleteUserAction(id);
            this.props.deletePollAction(id);
            this.props.history.push("/users");
        };
    }

    componentDidMount() {
        const id = this.props.id;

        if (id === "my" && this.props.user.status === "user") {
            ReactDOM.render(
                <Provider store={store}>
                    <UserInfoForUser
                        delete={this.delete}
                        back={this.back}
                        history={this.props.history}
                    />
                </Provider>,
                document.getElementById("userInfoBox"),
            );
        } else if (id === "my" && this.props.user.status === "admin") {
            ReactDOM.render(
                <Provider store={store}>
                    <UserInfoForAdmin
                        delete={this.delete}
                        data={this.props.user}
                        back={this.back}
                        history={this.props.history}
                    />
                </Provider>,
                document.getElementById("userInfoBox"),
            );
        } else if (this.props.user.status === "admin") {
            const data = this.props.users.filter(item => item.id === id);

            ReactDOM.render(
                <Provider store={store}>
                    <UserInfoForAdmin
                        delete={this.delete}
                        data={data[0]}
                        history={this.props.history}
                        back={this.back}
                    />
                </Provider>,
                document.getElementById("userInfoBox"),
            );
        } else {
            const data = this.props.users.filter(item => item.id === id);

            ReactDOM.render(
                <Provider store={store}>
                    <UserInfoClosed
                        data={data[0]}
                        back={this.back}
                        history={this.props.history}
                    />
                </Provider>,
                document.getElementById("userInfoBox"),
            );
        }
    }

    render() {
        return (
            <Container id="userInfoBox" />
        );
    }
}
UserInfo.propTypes = {
    id: propTypes.string,
    user: propTypes.object,
    users: propTypes.array,
    history: propTypes.object,
    deleteUserAction: propTypes.func,
    deletePollAction: propTypes.func,
};
function mapStateToProps(state) {
    return {
        id: state.target,
        user: state.user,
        users: state.users,
    };
}
export default connect(mapStateToProps, { deletePollAction, deleteUserAction })(UserInfo);
