import React, { Component } from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

import store from "../logic/store";

import Caption from "../commonComponents/caption";
import Container from "../commonComponents/container";
import SearchInput from "../commonComponents/searchInput";
import { Row, Col } from "../commonComponents/row&col";
import { Actions } from "../commonComponents/actions";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            page: 0,
        };
        this.users = store.getState().users || JSON.parse(localStorage.getItem("users"));
        this.page = 0;

        this.showModal = (event) => {
            const target = event.target.closest("ul");

            store.dispatch({
                type: "showProfile",
                target: target.id,
            });
            this.props.history.push("/users/userInfo");
        };

        this.renderNewPage = (event) => {
            let btn = event.target;
            const id = btn.id;
            const pageCount = (Math.ceil(this.users.length / 10));

            if (btn.tagName === "I") {
                btn = btn.parentElement;
            }
            if (id === "doubleLeft") {
                if (this.page === 0) {
                    return;
                } else {
                    this.page = 0;
                    ReactDOM.render(
                        <div>
                            {this.users.slice(0, 10).map((item, i) => {
                                return <Row key={i} item={item} showModal={this.showModal}/>;
                            })}
                        </div>,
                        document.getElementById("table"),
                    );
                }
            } else if (id === "left") {
                if (this.page === 0) {
                    return;
                } else {
                    this.page = this.page - 1;
                    ReactDOM.render(
                        <div>
                            {this.users.slice(this.page * 10, (this.page * 10) + 10).map((item, i) => {
                                return <Row key={i} id={item.id}>
                                    <Col onClick={this.showModal} >{item.name}</Col>
                                    <Col>{item.status}</Col>
                                    <Col>{item.registered}</Col>
                                    <Col>{item.polls.length}</Col>
                                    <Col><Actions showModal={this.showModal}/></Col>
                                </Row>;
                            })
                            }
                        </div>,
                        document.getElementById("table"),
                    );
                }
            } else if (id === "right") {
                if (this.page === pageCount) {
                    return;
                } else {
                    this.page = this.page + 1;
                    ReactDOM.render(
                        <div>
                            {this.users.slice(this.page * 10, (this.page * 10) + 10).map((item, i) => {
                                return <Row key={i} id={item.id}>
                                    <Col onClick={this.showModal} >{item.name}</Col>
                                    <Col>{item.status}</Col>
                                    <Col>{item.registered}</Col>
                                    <Col>{item.polls.length}</Col>
                                    <Col><Actions showModal={this.showModal}/></Col>
                                </Row>;
                            })
                            }
                        </div>,
                        document.getElementById("table"),
                    );
                }
            } else if (id === "doubleRight") {
                if (this.page === pageCount) {
                    return;
                } else {
                    this.page = pageCount;
                    ReactDOM.render(
                        <div>
                            {this.users.slice(this.page * 10).map((item, i) => <Row key={i} id={item.id}>
                                <Col onClick={this.showModal} >{item.name}</Col>
                                <Col>{item.status}</Col>
                                <Col>{item.registered}</Col>
                                <Col>{item.polls.length}</Col>
                                <Col><Actions showModal={this.showModal}/></Col>
                            </Row>)}
                        </div>,
                        document.getElementById("table"),
                    );
                }
            }
        };

        this.search = (event) => {
            const value = event.target.value;
            const data = [];
            const users = store.getState().users || JSON.parse(localStorage.getItem("users"));

            users.forEach((item) => {
                if (item.name.indexOf(value) !== -1) {
                    data.push(item);
                }
            });
            ReactDOM.render(
                <div>
                    {data.slice(0, 10).map((item, i) => <Row key={i} id={item.id}>
                        <Col onClick={this.showModal} >{item.name}</Col>
                        <Col>{item.status}</Col>
                        <Col>{item.registered}</Col>
                        <Col>{item.polls.length}</Col>
                        <Col><Actions showModal={this.showModal}/></Col>
                    </Row>)}
                </div>,
                document.getElementById("table"),
            );
        };
    }

    componentDidMount() {
        document.getElementById("usersCount").innerHTML = this.users.length;
        ReactDOM.render(
            <div>
                {this.users.slice(0, 10).map((item, i) => <Row key={i} id={item.id}>
                    <Col onClick={this.showModal}>{item.name}</Col>
                    <Col>{item.status}</Col>
                    <Col>{item.registered}</Col>
                    <Col>{item.polls.length}</Col>
                    <Col><Actions goal="user" showModal={this.showModal}/></Col>
                </Row>)}
            </div>,
            document.getElementById("table"),
        );
    }

    render() {
        return (
            <Container>
                <div className="captionBox">
                    <Caption cap>Users</Caption>
                    <label className="searchLabel">
                        <SearchInput onChange={this.search} type="search" placeholder="search..." />
                        <i className="fa fa-search searchButton" aria-hidden="true" />
                    </label>
                </div>
                <section className="userList">
                    <Row colorRow>
                        <Col non>Name</Col>
                        <Col>Role</Col>
                        <Col>Registered</Col>
                        <Col>Polls</Col>
                        <Col>Actions</Col>
                    </Row>
                    <div id="table" className="table" />
                    <Row colorRow>
                        <Col count>Users count: <span id="usersCount">{this.users.length}</span></Col>
                        <Col nav>
                            <button className="navButton" id="doubleLeft" onClick={this.renderNewPage}>
                                <i className="fa fa-angle-double-left" aria-hidden="true" />
                            </button>
                            <button className="navButton" id="left" onClick={this.renderNewPage}>
                                <i className="fa fa-angle-left" aria-hidden="true" />
                            </button>
                            <button className="navButton" id="right" onClick={this.renderNewPage}>
                                <i className="fa fa-angle-right" aria-hidden="true" />
                            </button>
                            <button className="navButton" id="doubleRight" onClick={this.renderNewPage}>
                                <i className="fa fa-angle-double-right" aria-hidden="true" />
                            </button>
                        </Col>
                    </Row>
                </section>
            </Container>
        );
    }
}

UserList.propTypes = {
    history: propTypes.object,
};
export default UserList;
