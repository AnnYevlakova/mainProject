import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

import setUsersAction from "../logic/actions/setUsersAction";
import setPollsAction from "../logic/actions/setPollsAction";

import PollTableRow from "./pollTableRow";
import Caption from "../commonComponents/caption";
import Container from "../commonComponents/container";
import MainButton from "../commonComponents/mainButton";
import SearchInput from "../commonComponents/searchInput";
import { Row, Col } from "../commonComponents/row&col";

class PollsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            polls: [],
            pollsCount: 0,
            currentPage: 0,
            pageCount: 0,
        };

        this.search = (event) => {
            const value = event.target.value.toLowerCase();
            const data = [];

            this.props.polls.forEach((item) => {
                if (item.name.toLowerCase().indexOf(value) !== -1) {
                    data.push(item);
                }
            });
            this.setState({ polls: data });
        };

        this.renderNewPage = (event) => {
            let btn = event.target;
            let id = btn.id;

            if (btn.tagName === "I") {
                btn = btn.parentElement;
                id = btn.id;
            }
            if (id === "doubleLeft") {
                if (this.state.currentPage !== 0) {
                    this.setState({
                        currentPage: 0,
                        polls: this.props.polls.slice(0, 10),
                    });
                }
            } else if (id === "left") {
                if (this.state.currentPage !== 0) {
                    this.setState({
                        currentPage: --this.state.currentPage,
                        polls: this.props.polls.slice(this.state.currentPage * 10, (this.state.currentPage * 10) + 10)
                    });
                }
            } else if (id === "right") {
                if (this.state.currentPage !== this.state.pageCount) {
                    this.setState({
                        currentPage: ++this.state.currentPage,
                        polls: this.props.polls.slice(this.state.currentPage * 10, (this.state.currentPage * 10) + 10)
                    });
                }
            } else if (id === "doubleRight") {
                if (this.state.currentPage !== this.state.pageCount) {
                    this.setState({
                        currentPage: this.state.pageCount,
                        polls: this.props.polls.slice(this.state.pageCount * 10)
                    });
                }
            }
        };

        this.createPoll = () => {
            document.getElementById("newPoll").click();
        };
    }

    componentWillMount() {
        this.props.setUsersAction();
        this.props.setPollsAction();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.polls.length !== 0) {
            this.setState({
                polls: nextProps.polls,
                pollsCount: nextProps.polls.length,
                pageCount: (Math.floor(nextProps.polls.length / 10)),
            });
        }
    }

    render() {
        return (
            <Container>
                <div className="captionBox">
                    <Caption cap>My Polls</Caption>
                    <MainButton onClick={this.createPoll} caption value="create poll" type="button"/>
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
                    <div id="table" className="table">
                        {this.state.polls.map((item, i) => {
                            return <PollTableRow
                                history={this.props.history}
                                key={i}
                                item={item}
                            />;
                        })}
                    </div>
                    <Row colorRow>
                        <Col count>Polls count: <span id="pollsCount">{this.state.polls.length}</span></Col>
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
    user: propTypes.object,
    polls: propTypes.array,
    setPollsAction: propTypes.func,
    setUsersAction: propTypes.func,
};
function mapStateToProps(state) {
    return {
        user: state.user,
        polls: state.polls.filter(item => item.user === state.user.id),
    };
}
export default connect(mapStateToProps, { setUsersAction, setPollsAction })(PollsList);
