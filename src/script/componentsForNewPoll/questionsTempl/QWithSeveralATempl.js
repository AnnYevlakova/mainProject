import React, { Component } from 'react';

import DefaultField from '../../commonComponents/defaultField';
import Btn from '../../commonComponents/btn';
import QuestionBox from '../questionBox';
import InputContainer from '../../commonComponents/inputContainer';
import TextareaField from '../../commonComponents/textareaField';
import QFooter from '../questionFooter';

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
		const data = this.props.data || { question: '', answers: ['', '', '', '', ''] };
		return (
			<QuestionBox id={this.props.number} data-type="QWithSeveralATempl">
				<header>
					<span>{this.props.number}. <i className="fa fa-list-ol" aria-hidden="true" /></span>
					<TextareaField data-type="question" placeholder={data.question || 'Question'} />
				</header>
				<ul>
					<li>
						<InputContainer className="label">
							<DefaultField poll type="text" data-type="answer" placeholder={data.answers[0] || 'answer1'}/>
						</InputContainer>
					</li>
					<li>
						<InputContainer className="label">
							<DefaultField poll type="text" data-type="answer" placeholder={data.answers[1] || 'answer2'}/>
						</InputContainer>
					</li>
					<li>
						<InputContainer className="label">
							<DefaultField poll type="text" data-type="answer" placeholder={data.answers[2] || 'answer3'}/>
						</InputContainer>
					</li>
					<li>
						<InputContainer className="label">
							<DefaultField poll type="text" data-type="answer" placeholder={data.answers[3] || 'answer4'}/>
						</InputContainer>
					</li>
					<li>
						<InputContainer className="label">
							<DefaultField poll type="text" data-type="answer" placeholder={data.answers[4] || 'answer5'}/>
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
			</QuestionBox>
		);
	}
}
export default QWithSeveralA;
