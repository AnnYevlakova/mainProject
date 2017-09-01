import React, { Component } from "react";
import propTypes from "prop-types";

import DefaultField from "../../commonComponents/defaultField";
import Btn from "../../commonComponents/btn";
import QuestionBox from "../questionBox";
import InputContainer from "../../commonComponents/inputContainer";
import TextareaField from "../../commonComponents/textareaField";
import QFooter from "../questionFooter";

class QScale extends Component {
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
        const data = this.props.data || { question: "", from: "", to: "" };

        return (
            <QuestionBox id={this.props.number} data-type="QScaleTempl">
                <header>
                    <span>{this.props.number}. <i className="fa fa-battery-half" aria-hidden="true" /></span>
                    <TextareaField data-type="question" placeholder={data.question || "Question"} />
                </header>
                <DefaultField data-id="from" placeholder={data.from || "scale from"}/>
                <DefaultField data-id="to" placeholder={data.to || "scale to"}/>
                <QFooter>
                    <InputContainer className={this.props.required ? "" : "hidden"}>
                        <DefaultField data-id="requiredField" checkbox onChange={this.isRequired} type="checkbox"/>
						Required
                    </InputContainer>
                    <Btn poll onClick={this.props.save}>save</Btn>
                    <Btn poll onClick={this.props.delete}>delete</Btn>
                </QFooter>
            </QuestionBox>
        );
    }
}

QScale.propTypes = {
    save: propTypes.func,
    delete: propTypes.func,
    required: propTypes.bool,
    number: propTypes.number,
    data: propTypes.string,
};
export default QScale;
