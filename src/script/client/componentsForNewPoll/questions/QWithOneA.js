import React, { Component } from "react";
import propTypes from "prop-types";

import DefaultField from "../../commonComponents/defaultField";
import Btn from "../../commonComponents/btn";
import QuestionBox from "../questionBox";
import InputContainer from "../../commonComponents/inputContainer";
import QFooter from "../questionFooter";

class QWithOneA extends Component {
    constructor(props) {
        super(props);
        this.required = true;
        this.answers = [];

        this.isRequired = (event) => {
            if (event.target.value === "on") {
                this.required = true;
            } else {
                this.required = false;
            }
        };
        this.setAnswer = (event) => {
            const index = event.target.id;

            this.answers.forEach((item, i) => {
                if (i == index) {
                    item.checked = true;
                } else {
                    item.checked = false;
                }
            });
        };
    }

    componentDidMount() {
        this.answers = Array.from(document.querySelectorAll("input[type=\"checkbox\"]"));
    }
    render() {
        const data = this.props.data || { question: "", answers: ["", "", "", "", ""] };

        return (
            <QuestionBox id={this.props.number} data-type="QWithOneA">
                <header>
                    <span>{this.props.number}.</span>
                    <span id="requiredMark">{this.props.required ? "*" : ""}</span>
                    <p>{data.question}</p>
                </header>
                <ul>
                    {data.answers.map((item, i) => {
                        return <InputContainer block key={i}>
                            <DefaultField id={i} onChange={this.setAnswer} checkbox type="checkbox"/>
                            {item}
                        </InputContainer>;
                    })}
                </ul>
                <QFooter>
                    <Btn poll onClick={this.props.edit}>edit</Btn>
                    <Btn poll onClick={this.props.delete}>delete</Btn>
                </QFooter>
            </QuestionBox >
        );
    }
}

QWithOneA.propTypes = {
    edit: propTypes.func,
    delete: propTypes.func,
    required: propTypes.bool,
    number: propTypes.number,
    data: propTypes.string,
};
export default QWithOneA;
