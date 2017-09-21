import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import propTypes from "prop-types";

import store from "../logic/store";
import { showUserAction } from "../logic/actions/userActions";
import { deleteUserAction } from "../logic/actions/userActions";
import { deletePollAction } from "../logic/actions/pollActions";

import RouterLink from "./routerLink";
import UserInfoForUser from "../componentsForUsers/userInfoForUser";
import UserInfoForAdmin from "../componentsForUsers/userInfoForAdmin";

class MenuDropdown extends Component {
    constructor(props) {
        super(props);

        this.back = () => {
            this.props.history.goBack();
            if (window.location.pathname === "/users/userInfo") {
                this.props.history.goBack();
            }
        };

        this.delete = () => {
            let id = this.props.id;

            if (id === "my") {
                id = this.props.user.id;
                document.getElementById("logOut").click();
            }
            this.props.deleteUserAction(id);
            this.props.deletePollAction(id);
        };

        this.onClick = (event) => {
            const target = event.target;

            if (target.id === "toTheMyProfile") {
                this.props.showUserAction("my");
                if (window.location.pathname === "/users/userInfo" && this.props.user.status === "user") {
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
                } else if (window.location.pathname === "/users/userInfo" && this.props.user.status === "admin") {
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
                }
            } else {
                localStorage.clear();
                document.getElementById("mainContainer").style.alignItems = "flex-start";
            }
        };

        this.openCloseMenuDropdown = (event) => {
            let btn = event.target;
            const items = Array.from(document.querySelectorAll(".menuDropdown li"));

            if (btn.classList.contains("fa")) {
                btn = document.getElementById("arrow");
            }
            if (btn.dataset.status === "closed") {
                items.forEach((item) => {
                    item.style.display = "block";
                });
                btn.dataset.status = "opened";
                btn.innerHTML = "&#9650;";
            } else {
                items.forEach((item) => {
                    item.style.display = "none";
                });
                btn.innerHTML = "&#9660;";
                btn.dataset.status = "closed";
            }
        };
    }

    render() {
        return (
            <ul className="menuDropdown">
                <i onClick={this.openCloseMenuDropdown} className="fa fa-user" aria-hidden="true" />
                <span>Hi, {this.props.user.username}</span>
                <button onClick={this.openCloseMenuDropdown} data-status="closed" className="arrow" id="arrow">&#9660;</button>
                <li className="menuItem menuItem1">
                    <RouterLink onClick={this.onClick} id="toTheMyProfile" to="/users/userInfo">my profile</RouterLink>
                </li>
                <li className="menuItem menuItem2">
                    <RouterLink onClick={this.onClick} id="logOut" to="/">Log out</RouterLink>
                </li>
            </ul>
        );
    }
}

MenuDropdown.propTypes = {
    showUserAction: propTypes.func,
    history: propTypes.object,
    user: propTypes.object,
    id: propTypes.string,
    deleteUserAction: propTypes.func,
    deletePollAction: propTypes.func,
};

function mapStateToProps(state) {
    return {
        user: state.user,
        id: state.target,
    };
}
export default connect(mapStateToProps, { showUserAction, deletePollAction, deleteUserAction })(MenuDropdown);
