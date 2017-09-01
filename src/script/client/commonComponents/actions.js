import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import propTypes from "prop-types";

import store from "../logic/store";

import { Row, Col } from "./row&col";
import Btn from "./btn";
import update from "../logic/update";

export class Actions extends Component {
    constructor(props) {
        super(props);
        this.goal = null;

        this.delete = (event) => {
            this.goal = event.target.parentElement.getAttribute("data-goal");
            const target = event.target.closest("ul");
            const id = target.id;

            if (this.goal === "user") {
                axios.delete(`https://5981a9d2139db000114a2d9c.mockapi.io/users/${id}`);
                target.remove();
                store.dispatch({ type: "deleteUser", id });
                document.getElementById("table").innerHTML = "";
                ReactDOM.render(
                    <div>
                        {store.getState().users.slice(0, 10).map((item, i) => <Row key={i} id={item.id}>
                            <Col onClick={this.showModal}>{item.name}</Col>
                            <Col>{item.status}</Col>
                            <Col>{item.registered}</Col>
                            <Col>{item.polls.length}</Col>
                            <Col><Actions goal="user" showModal={this.props.showModal}/></Col>
                        </Row>)}
                    </div>,
                    document.getElementById("table"),
                );
                document.getElementById("usersCount").innerHTML = store.getState().users.length;
            }

            if (this.goal === "poll") {
                const userData = store.getState().user;
                const polls = userData.polls.filter(item => !(item == id));

                axios.delete(`https://5981a9d2139db000114a2d9c.mockapi.io/polls/${id}`)
                    .then(() => {
                        axios.put(`https://5981a9d2139db000114a2d9c.mockapi.io/users/${userData.id}`, {
                            id: userData.id,
                            registered: userData.registered,
                            name: userData.name,
                            email: userData.email,
                            status: userData.status,
                            polls,
                            password: userData.password,
                        }).then(() => axios.delete(`https://5981a9d2139db000114a2d9c.mockapi.io/polls/${id}`))
                            .then(() => {
                                update();
                            });
                    });
                target.remove();
                store.dispatch({ type: "deletePoll", id });
                document.getElementById("table").innerHTML = "";
                ReactDOM.render(
                    <div>
                        {store.getState().userPolls.slice(0, 10).map((item, i) => <Row key={i} id={item.id}>
                            <Col onClick={this.showModal}>{item.name}</Col>
                            <Col>{item.changed}</Col>
                            <Col>{item.answers.length}</Col>
                            <Col>{item.link}</Col>
                            <Col>{"link"}</Col>
                            <Col><Actions goal="poll" showModal={this.showModal}/></Col>
                        </Row>)}
                    </div>,
                    document.getElementById("table"),
                );
                document.getElementById("pollsCount").innerHTML = store.getState().polls.length;
            }
        };
        this.edit = this.props.showModal;
    }
    render() {
        const status = store.getState().user
            ? store.getState().user.status
            : JSON.parse(localStorage.getItem("users"))[localStorage.getItem("id").split("-")[1]].status;

        return (
            status === "admin" || this.goal === "poll"
                ? <div>
                    <Btn onClick={this.edit}><i className="fa fa-pencil-square" aria-hidden="true" /></Btn>
                    <Btn onClick={this.delete}><i className="fa fa-trash" aria-hidden="true" /></Btn>
                    <Btn onClick={this.delete} data-goal={this.props.goal}><i className="fa fa-trash" aria-hidden="true" /></Btn>
                </div>
                : <Btn onClick={this.edit}><i className="fa fa-chevron-circle-right" aria-hidden="true" /></Btn>
        );
    }
}

Actions.propTypes = {
    showModal: propTypes.func,
    goal: propTypes.string,
};
