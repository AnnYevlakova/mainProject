import React, { Component } from 'react';

import DefaultField from '../../commonComponents/defaultField';
import Btn from '../../commonComponents/btn';
import QuestionBox from '../questionBox';
import InputContainer from '../../commonComponents/inputContainer';
import TextareaField from '../../commonComponents/textareaField';

class QWithSeveralA extends Component {
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
			<QuestionBox id={this.props.number} data-type="QWithSeveralA">
				<header>
					<span>{this.props.number}. <i className="fa fa-list-ol" aria-hidden="true" /></span>
					<TextareaField data-type="question" placeholder="Question" />
				</header>
				<ul>
					<li>
						<InputContainer className="label">
							<DefaultField poll type="text" data-type="answer" placeholder="answer1"/>
						</InputContainer>
					</li>
					<li>
						<InputContainer className="label">
							<DefaultField poll type="text" data-type="answer" placeholder="answer2"/>
						</InputContainer>
					</li>
					<li>
						<InputContainer className="label">
							<DefaultField poll type="text" data-type="answer" placeholder="answer3"/>
						</InputContainer>
					</li>
					<li>
						<InputContainer className="label">
							<DefaultField poll type="text" data-type="answer" placeholder="answer4"/>
						</InputContainer>
					</li>
					<li>
						<InputContainer className="label">
							<DefaultField poll type="text" data-type="answer" placeholder="answer5"/>
						</InputContainer>
					</li>
				</ul>
				<footer>
					<InputContainer className={this.props.required ? '' : 'hidden'}>
						<DefaultField data-id='requiredField' checkbox onChange={this.isRequired} type="checkbox"/>
						Required
					</InputContainer>
					<Btn poll type="button" id="saveBtnForQWithSeveralA" onClick={this.props.save}>save</Btn>
					<Btn poll type="button" onClick={this.props.delete}>delete</Btn>
				</footer>
			</QuestionBox>
		);
	}
}
export default QWithSeveralA;
