import React, { Component } from 'react';

import DefaultField from '../../commonComponents/defaultField';
import Btn from '../../commonComponents/btn';
import QuestionBox from '../questionBox';
import InputContainer from '../../commonComponents/inputContainer';
import TextareaField from '../../commonComponents/textareaField';
import QFooter from '../questionFooter';

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
		const data = this.props.data || { question: '', answers: ['', '', '', '', ''] };
		return (
			<QuestionBox id={this.props.number} data-type="QWithOneATempl">
				<header>
					<span>{this.props.number}. <i className="fa fa-list" aria-hidden="true" /></span>
					<TextareaField data-type="question" placeholder={data.question || 'Question'} />
				</header>
				<ul>
					<li>
						<InputContainer className="label">
							<DefaultField poll data-type="answer" type="text" placeholder={data.answers[0] || 'answer1'}/>
						</InputContainer>
					</li>
					<li>
						<InputContainer className="label">
							<DefaultField poll data-type="answer" type="text" placeholder={data.answers[1] || 'answer2'} />
						</InputContainer>
					</li>
					<li>
						<InputContainer className="label">
							<DefaultField poll data-type="answer" type="text" placeholder={data.answers[2] || 'answer3'} />
						</InputContainer>
					</li>
					<li>
						<InputContainer className="label">
							<DefaultField poll data-type="answer" type="text" placeholder={data.answers[3] || 'answer4'} />
						</InputContainer>
					</li>
					<li>
						<InputContainer className="label">
							<DefaultField poll data-type="answer" type="text" placeholder={data.answers[4] || 'answer5'} />
						</InputContainer>
					</li>
				</ul>
				<QFooter>
					<InputContainer className={this.props.required ? '' : 'hidden'}>
						<DefaultField data-id='requiredField' checkbox onChange={this.isRequired} type="checkbox"/>
						Required
					</InputContainer>
					<Btn poll onClick={this.props.save}>save</Btn>
					<Btn poll onClick={this.props.delete}>delete</Btn>
				</QFooter>
			</QuestionBox >
		);
	}
}
export default QWithOneA;
