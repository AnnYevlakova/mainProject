import React, { Component } from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

import store from "../logic/store";
import { renderNewPage, showModal, search, createPoll } from "./pollsListControl";

import Caption from "../commonComponents/caption";
import Container from "../commonComponents/container";
import MainButton from "../commonComponents/mainButton";
import SearchInput from "../commonComponents/searchInput";
import { Row, Col } from "../commonComponents/row&col";
import { Actions } from "../commonComponents/actions";
import Btn from "../commonComponents/btn";

export class PollsList extends Component {
    constructor(props) {
        super(props);
        this.page = 0;
        this.polls = store.getState().userPolls || JSON.parse(localStorage.getItem("userPolls"));

        this.showModal = showModal.bind(this);
        this.search = search.bind(this);
        this.renderNewPage = renderNewPage.bind(this);
    }

    componentWillMount() {
        this.polls = store.getState().userPolls;
    }

    componentDidMount() {
        document.getElementById("pollsCount").innerHTML = this.polls.length;
        ReactDOM.render(
            <div>
                {this.polls.slice(0, 10).map((item, i) => <Row key={i} id={item.id}>
                    <Col onClick={this.showModal}>{item.name}</Col>
                    <Col>{item.changed}</Col>
                    <Col>{item.answers.length}</Col>
                    <Col><Btn onClick={this.showModal}>Link</Btn></Col>
                    <Col>{"link"}</Col>
                    <Col><Actions goal="poll" showModal={this.showModal}/></Col>
                </Row>)}
            </div>,
            document.getElementById("table"),
        );
    }

    render() {
        return (
            <Container>
                <div className="captionBox">
                    <Caption cap>My Polls</Caption>
                    <MainButton onClick={createPoll} caption value="create poll" type="button"/>
                    <label className="searchLabel">
                        <SearchInput onChange={this.search} type="search" placeholder="search..." />
                        <i className="fa fa-search searchButton" aria-hidden="true" />
                    </label>
                </div>
                <section className="pollsList">
                    <Row colorRow>
                        <Col non>Name</Col>
                        <Col>Changed</Col>
                        <Col>Answers</Col>
                        <Col>Link</Col>
                        <Col>Results</Col>
                        <Col>Actions</Col>
                    </Row>
                    <div id="table" className="table" />
                    <Row colorRow>
                        <Col count>Polls count: <span id="pollsCount">{this.polls.length}</span></Col>
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

PollsList.propTypes = {
    history: propTypes.object,
};
