import React, { Component } from "react";
import propTypes from "prop-types";

import DefaultField from "../../commonComponents/defaultField";
import Btn from "../../commonComponents/btn";
import QuestionBox from "../questionBox";
import InputContainer from "../../commonComponents/inputContainer";
import TextareaField from "../../commonComponents/textareaField";
import QFooter from "../questionFooter";

class QWithOneA extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data || { question: "", answers: ["", "", "", "", ""] };

        return (
            <QuestionBox id={this.props.number} data-type="QWithOneATempl">
                <header>
                    <span>{this.props.number}. <i className="fa fa-list" aria-hidden="true" /></span>
                    <TextareaField data-type="question" placeholder={data.question || "Question"} />
                </header>
                <ul>
                    <li>
                        <InputContainer className="label">
                            <DefaultField poll data-type="answer" type="text" placeholder={data.answers[0] || "answer1"}/>
                            <Btn onClick={this.props.deleteQField} id="0" deleteQField><i className="fa fa-times" aria-hidden="true" /></Btn>
                        </InputContainer>
                    </li>
                    <li>
                        <InputContainer className="label">
                            <DefaultField poll data-type="answer" type="text" placeholder={data.answers[1] || "answer2"} />
                            <Btn onClick={this.props.deleteQField} id="1" deleteQField><i className="fa fa-times" aria-hidden="true" /></Btn>
                        </InputContainer>
                    </li>
                    <li>
                        <InputContainer className="label">
                            <DefaultField poll data-type="answer" type="text" placeholder={data.answers[2] || "answer3"} />
                            <Btn onClick={this.props.deleteQField} id="2" deleteQField><i className="fa fa-times" aria-hidden="true" /></Btn>
                        </InputContainer>
                    </li>
                    <li>
                        <InputContainer className="label">
                            <DefaultField poll data-type="answer" type="text" placeholder={data.answers[3] || "answer4"} />
                            <Btn onClick={this.props.deleteQField} id="3" deleteQField><i className="fa fa-times" aria-hidden="true" /></Btn>
                        </InputContainer>
                    </li>
                    <li>
                        <InputContainer className="label">
                            <DefaultField poll data-type="answer" type="text" placeholder={data.answers[4] || "answer5"} />
                            <Btn onClick={this.props.deleteQField} id="4" deleteQField><i className="fa fa-times" aria-hidden="true" /></Btn>
                        </InputContainer>
                    </li>
                </ul>
                <QFooter>
                    <Btn poll onClick={this.props.save}>save</Btn>
                    <Btn poll onClick={this.props.delete}>delete</Btn>
                </QFooter>
            </QuestionBox >
        );
    }
}

QWithOneA.propTypes = {
    save: propTypes.func,
    delete: propTypes.func,
    deleteQField: propTypes.func,
    number: propTypes.number,
    data: propTypes.string,
};
export default QWithOneA;
