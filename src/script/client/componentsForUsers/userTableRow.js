import React, { Component } from "react";
import propTypes from "prop-types";

import { Row, Col } from "../commonComponents/row&col";
import Actions from "../commonComponents/actions";

export class UserTableRow extends Component {
    render() {
        const item = this.props.item;
        const poll = this.props.polls.filter((poll) => poll.user === item.id);

        return (
            <Row>
                <Col>{item.username}</Col>
                <Col>{item.status}</Col>
                <Col>{item.registered}</Col>
                <Col>{poll.length}</Col>
                <Col className="userActionBox" id={item.id}><Actions target="actions" history={this.props.history} /></Col>
            </Row>
        );
    }
}
UserTableRow.propTypes = {
    history: propTypes.object,
    item: propTypes.object,
    polls: propTypes.array,
};
export default UserTableRow;
