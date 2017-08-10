import React, { Component } from 'react';

import DefaultField from '../../commonComponents/defaultField';
import Btn from '../../commonComponents/btn';
import QuestionBox from '../questionBox';
import InputContainer from '../../commonComponents/inputContainer';
import TextareaField from '../../commonComponents/textareaField';

class QScale extends Component {
	constructor(props) {
		super(props);
		this.required = true;

		this.isRequired = (event) => {
			if (event.target.value === 'on') {
				this.required = true;
			} else {
				this.required = false;
			}
		};
	}

	render() {
		return (
			<QuestionBox id={this.props.number} data-type="QScale">
				<header>
					<span>{this.props.number}. <i className="fa fa-battery-half" aria-hidden="true" /></span>
					<TextareaField data-type="question" placeholder="Question" />
				</header>
				<MyField data-id="from" placeholder="scale from"/>
				<MyField data-id="to" placeholder="scale to"/>
				<footer>
					<InputContainer className={this.props.required ? '' : 'hidden'}>
						<DefaultField data-id='requiredField' checkbox onChange={this.isRequired} type="checkbox"/>
						Required
					</InputContainer>
					<Btn poll type="button" id="saveBtnForQScale" onClick={this.props.save}>save</Btn>
					<Btn poll type="button" onClick={this.props.delete}>delete</Btn>
				</footer>
			</QuestionBox>
		);
	}
}
export default QScale;
