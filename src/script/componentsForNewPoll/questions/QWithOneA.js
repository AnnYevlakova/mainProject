import React, { Component } from 'react';

import DefaultField from '../../commonComponents/defaultField';
import Btn from '../../commonComponents/btn';
import QuestionBox from '../questionBox';
import InputContainer from '../../commonComponents/inputContainer';
import TextareaField from '../../commonComponents/textareaField';

class QWithOneA extends Component {
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
			<QuestionBox  id={this.props.number} data-type="QWithOneA">
				<header>
					<span>{this.props.number}. <i className="fa fa-list" aria-hidden="true" /></span>
					<TextareaField data-type="question" placeholder="Question" />
				</header>
				<ul>
					<li>
						<InputContainer className="label">
							<DefaultField poll data-type="answer" type="text" placeholder="answer1"/>
						</InputContainer>
					</li>
					<li>
						<InputContainer className="label">
							<DefaultField poll data-type="answer" type="text" placeholder="answer2"/>
						</InputContainer>
					</li>
					<li>
						<InputContainer className="label">
							<DefaultField poll data-type="answer" type="text" placeholder="answer3"/>
						</InputContainer>
					</li>
					<li>
						<InputContainer className="label">
							<DefaultField poll data-type="answer" type="text" placeholder="answer4"/>
						</InputContainer>
					</li>
					<li>
						<InputContainer className="label">
							<DefaultField poll data-type="answer" type="text" placeholder="answer5"/>
						</InputContainer>
					</li>
				</ul>
				<footer>
					<InputContainer className={this.props.required ? '' : 'hidden'}>
						<DefaultField data-id='requiredField' checkbox onChange={this.isRequired} type="checkbox"/>
						Required
					</InputContainer>
					<Btn poll type="button" id="saveBtnForQWithOneA" onClick={this.props.save}>save</Btn>
					<Btn poll type="button" onClick={this.props.delete}>delete</Btn>
				</footer>
			</QuestionBox >
		);
	}
}
export default QWithOneA;
