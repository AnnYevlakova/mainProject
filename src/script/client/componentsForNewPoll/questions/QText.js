import React, { Component } from "react";
import propTypes from "prop-types";

import Btn from "../../commonComponents/btn";
import QuestionBox from "../questionBox";
import QFooter from "../questionFooter";
import TextareaField from "../../commonComponents/textareaField";

class QText extends Component {
    constructor(props) {
        super(props);
        this.required = true;

        this.isRequired = (event) => {
            if (event.target.value === "on") {
                this.required = true;
            } else {
                this.required = false;
            }
        };
    }

    render() {
        const data = this.props.data || { question: "" };

        return (
            <QuestionBox id={this.props.number} data-type="QText">
                <header>
                    <span>{this.props.number}.</span>
                    <span id="requiredMark">{this.props.required ? "*" : ""}</span>
                    <p>{data.question}</p>
                </header>
                <TextareaField placeholder="Enter your answer"/>
                <QFooter>
                    <Btn poll onClick={this.props.edit}>edit</Btn>
                    <Btn poll onClick={this.props.delete}>delete</Btn>
                </QFooter>
            </QuestionBox >
        );
    }
}

QText.propTypes = {
    edit: propTypes.func,
    delete: propTypes.func,
    required: propTypes.bool,
    number: propTypes.number,
    data: propTypes.string,
};
export default QText;
