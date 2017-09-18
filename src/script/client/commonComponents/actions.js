import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

import { showUserAction, deleteUserAction } from "../logic/actions/userActions";
import { deletePollAction, showPollAction } from "../logic/actions/pollActions";

import Btn from "./btn";

export class Actions extends Component {
    constructor(props) {
        super(props);

        this.delete = (event) => {
            const btn = event.target;

            const target = btn.closest(".userActionBox") || btn.closest(".pallBox");

            if (target.classList.contains("userActionBox")) {
                this.deleteUser(target);
            } else {
                this.deletePoll(target);
            }
        };

        this.deleteUser = (target) => {
            const id = target.id;

            this.props.deleteUserAction(id);
            this.props.deletePollAction(id);
        };

        this.deletePoll = (target) => {
            const id = target.id;

            this.props.deletePollAction(id);
        };

        this.edit = (event) => {
            let btn = event.target;

            if (btn.tagName === "I") {
                btn = btn.parentElement;
            }
            const target = event.target.closest(".userActionBox") || event.target.closest(".pallActionBox");

            if (target.classList.contains("userActionBox")) {
                this.props.showUserAction(target);
                this.props.history.push("/users/userInfo");
            } else {
                this.props.showPollAction(target);
            }
        };
    }
    render() {
        const status = this.props.user.status;

        return (
            status === "admin"
                ? <div>
                    <Btn onClick={this.edit}><i className="fa fa-pencil-square" aria-hidden="true" /></Btn>
                    <Btn onClick={this.delete}><i className="fa fa-trash" aria-hidden="true" /></Btn>
                </div>
                : <Btn onClick={this.edit}><i className="fa fa-chevron-circle-right" aria-hidden="true" /></Btn>
        );
    }
}

Actions.propTypes = {
    showUserAction: propTypes.func,
    deleteUserAction: propTypes.func,
    showPollAction: propTypes.func,
    deletePollAction: propTypes.func,
    user: propTypes.object,
    users: propTypes.array,
    polls: propTypes.array,
    history: propTypes.object,
};
function mapStateToProps(state) {
    return {
        users: state.users,
        user: state.user,
        polls: state.polls,
    };
}
export default connect(mapStateToProps, { showUserAction, deleteUserAction, showPollAction, deletePollAction })(Actions);
