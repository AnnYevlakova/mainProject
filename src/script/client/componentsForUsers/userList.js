import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";

import setUsersAction from "../logic/actions/setUsersAction";
import setPollsAction from "../logic/actions/setPollsAction";

import Caption from "../commonComponents/caption";
import Container from "../commonComponents/container";
import SearchInput from "../commonComponents/searchInput";
import UserTableRow from "./UserTableRow";
import { Row, Col } from "../commonComponents/row&col";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            usersCount: 0,
            polls: [],
            currentPage: 0,
            pageCount: 0,
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
                        users: this.props.users.slice(0, 10),
                    });
                }
            } else if (id === "left") {
                if (this.state.currentPage !== 0) {
                    this.setState({
                        currentPage: --this.state.currentPage,
                        users: this.props.users.slice(this.state.currentPage * 10, (this.state.currentPage * 10) + 10)
                    });
                }
            } else if (id === "right") {
                if (this.state.currentPage !== this.state.pageCount) {
                    this.setState({
                        currentPage: ++this.state.currentPage,
                        users: this.props.users.slice(this.state.currentPage * 10, (this.state.currentPage * 10) + 10)
                    });
                }
            } else if (id === "doubleRight") {
                if (this.state.currentPage !== this.state.pageCount) {
                    this.setState({
                        currentPage: this.state.pageCount,
                        users: this.props.users.slice(this.state.pageCount * 10)
                    });
                }
            }
        };

        this.search = (event) => {
            const value = event.target.value;
            const data = [];

            this.props.users.forEach((item) => {
                if (item.username.indexOf(value) !== -1) {
                    data.push(item);
                }
            });
            this.setState({ users: data });
        };
    }

    componentDidMount() {
        this.props.setUsersAction();
        this.props.setPollsAction();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.users.length && nextProps.polls.length) {
            this.setState({
                users: nextProps.users.slice(0, 10),
                polls: nextProps.polls,
                usersCount: nextProps.users.length,
                pageCount: (Math.floor(nextProps.users.length / 10)),
            });
        }
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
                    <div id="table" className="table">
                        {this.state.users.map((item, i) => {
                            return <UserTableRow
                                history={this.props.history}
                                key={i} item={item}
                                polls={this.state.polls}
                            />;
                        })}
                    </div>
                    <Row colorRow>
                        <Col count>Users count: <span id="usersCount">{this.state.usersCount}</span></Col>
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
    setUsersAction: propTypes.func,
    users: propTypes.array,
    polls: propTypes.array,
    setPollsAction: propTypes.func,
};
function mapStateToProps(state) {
    return {
        users: state.users,
        polls: state.polls,
    };
}
export default connect(mapStateToProps, { setUsersAction, setPollsAction })(UserList);
