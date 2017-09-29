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
        this.state = {
            answers: [],
        };

        this.initialData = { question: "", answers: ["", "", "", "", ""] };

        this.setAnswer = (event) => {
            const index = event.target.id;
            const answers = this.state.answers;

            answers.forEach((item, i) => {
                item.checked = Boolean(i === Number(index));
            });
            this.setState({ answers });
        };
    }

    componentDidMount() {
        this.setState({ answers: Array.from(document.querySelectorAll("input[type='checkbox']")) });
    }

    render() {
        const data = this.props.data || this.initialData;

        return (
            <QuestionBox id={this.props.number} data-type = "QWithOneA">
                <header>
                    <span>{this.props.number}.</span>
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
    data: propTypes.object,
};
export default QWithOneA;
