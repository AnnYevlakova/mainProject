import React, { Component } from "react";
import propTypes from "prop-types";

import DefaultField from "../../commonComponents/defaultField";
import Btn from "../../commonComponents/btn";
import QuestionBox from "../questionBox";
import InputContainer from "../../commonComponents/inputContainer";
import TextareaField from "../../commonComponents/textareaField";
import QFooter from "../questionFooter";

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
            <QuestionBox id={this.props.number} data-type="QTextTempl">
                <header>
                    <span>{this.props.number}. <i className="fa fa-font" aria-hidden="true" /></span>
                    <TextareaField data-type="question" placeholder={data.question || "Question"} />
                </header>
                <QFooter>
                    <InputContainer className={this.props.required ? "" : "hidden"}>
                        <DefaultField data-id="requiredField" checkbox onChange={this.isRequired} type="checkbox"/>
						Required
                    </InputContainer>
                    <Btn poll onClick={this.props.save}>save</Btn>
                    <Btn poll onClick={this.props.delete}>delete</Btn>
                </QFooter>
            </QuestionBox >
        );
    }
}

QText.propTypes = {
    save: propTypes.func,
    delete: propTypes.func,
    required: propTypes.bool,
    number: propTypes.number,
    data: propTypes.string,
};
export default QText;
