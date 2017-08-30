import React from "react";
import ReactDOM from "react-dom";

import store from "../logic/store";

import { Row, Col } from "../commonComponents/row&col";
import { Actions } from "../commonComponents/actions";

export function showModal(event) {
    const target = event.target.closest("ul");

    store.dispatch({
        type: "showPoll",
        target: target.id,
    });
    this.props.history.push("/poll");
}

export function search(event) {
    const value = event.target.value;
    const data = [];

    this.polls.forEach((item) => {
        if (item.name.indexOf(value) !== -1) {
            data.push(item);
        }
    });
    ReactDOM.render(
        <div>
            {data.slice(0, 10).map((item, i) => <Row key={i} id={item.id}>
                <Col onClick={this.showModal}>{item.name}</Col>
                <Col>{item.changed}</Col>
                <Col>{item.answers.length}</Col>
                <Col>{item.link}</Col>
                <Col>{"link"}</Col>
                <Col><Actions goal="poll" showModal={this.showModal}/></Col>
            </Row>)}
            +</div>,
        document.getElementById("table"),
    );
}

export function renderNewPage(event) {
    let btn = event.target;
    let id = null;
    const pageCount = (Math.ceil(this.polls.length / 10)) - 1;

    if (btn.tagName === "I") {
        btn = btn.parentElement;
    }
    id = btn.id;
    if (id === "doubleLeft") {
        if (this.page) {
            this.page = 0;
            ReactDOM.render(
                <div>
                    {this.polls.slice(0, 10).map((item, i) => <Row key={i} id={item.id}>
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
        }
    } else if (id === "left") {
        if (this.page) {
            this.page = this.page - 1;
            ReactDOM.render(
                <div>
                    {this.polls.slice(this.page * 10, (this.page * 10) + 10).map((item, i) => {
                        return <Row key={i} id={item.id}>
                            <Col onClick={this.showModal}>{item.name}</Col>
                            <Col>{item.changed}</Col>
                            <Col>{item.answers.length}</Col>
                            <Col>{item.link}</Col>
                            <Col>{"link"}</Col>
                            <Col><Actions goal="poll" showModal={this.showModal}/></Col>
                        </Row>;
                    }
                    )}
                </div>,
                document.getElementById("table"),
            );
        }
    } else if (id === "right") {
        if (this.page !== pageCount) {
            this.page = this.page + 1;
            ReactDOM.render(
                <div>
                    {this.polls.slice(this.page * 10, (this.page * 10) + 10).map((item, i) => {
                        return <Row key={i} id={item.id}>
                            <Col onClick={this.showModal}>{item.name}</Col>
                            <Col>{item.changed}</Col>
                            <Col>{item.answers.length}</Col>
                            <Col>{item.link}</Col>
                            <Col>{"link"}</Col>
                            <Col><Actions goal="poll" showModal={this.showModal}/></Col>
                        </Row>;
                    })
                    }
                </div>,
                document.getElementById("table"),
            );
        }
    } else if (id === "doubleRight") {
        if (this.page !== pageCount) {
            this.page = pageCount;
            ReactDOM.render(
                <div>
                    {this.polls.slice(this.page * 10).map((item, i) => <Row key={i} id={item.id}>
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
        }
    }
}

export function createPoll() {
    document.getElementById("newPoll").click();
}
