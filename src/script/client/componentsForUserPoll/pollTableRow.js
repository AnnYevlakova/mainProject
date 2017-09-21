import React, { Component } from "react";
import propTypes from "prop-types";

import { Row, Col } from "../commonComponents/row&col";
import Actions from "../commonComponents/actions";

export class PollTableRow extends Component {
    render() {
        const item = this.props.item;

        return (
            <Row>
                <Col>{item.name}</Col>
                <Col>{item.changed}</Col>
                <Col>{item.answers.length}</Col>
                <Col>{"link"}</Col>
                <Col>{"link"}</Col>
                <Col className="pollActionBox" id={item.id}><Actions target="polls" history={this.props.history}/></Col>
            </Row>
        );
    }
}
PollTableRow.propTypes = {
    history: propTypes.object,
    item: propTypes.object,
    polls: propTypes.array,
};
export default PollTableRow;
