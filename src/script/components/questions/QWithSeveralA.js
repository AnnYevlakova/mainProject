import React, { Component } from 'react';
import MyField from '../myField';
import Btn from '../btn';
import MyDiv from './questionBox';
import Label from '../label';
import MyTextArea from '../textArea';

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
			<MyDiv id={this.props.number}>
				<header>
					<span>{this.props.number}. <i className="fa fa-list-ol" aria-hidden="true" /></span>
					<MyTextArea placeholder="Question" />
				</header>
				<ul>
					<li>
						<Label className="label"><MyField poll type="text" placeholder="answer1"/></Label>
					</li>
					<li>
						<Label className="label"><MyField poll type="text" placeholder="answer2"/></Label>
					</li>
					<li>
						<Label className="label"><MyField poll type="text" placeholder="answer3"/></Label>
					</li>
					<li>
						<Label className="label"><MyField poll type="text" placeholder="answer4"/></Label>
					</li>
					<li>
						<Label className="label"><MyField poll type="text" placeholder="answer5"/></Label>
					</li>
				</ul>
				<footer>
					<Label className={this.props.required ? '' : 'hidden'}>
						<MyField data-id='requiredField' checkbox onChange={this.isRequired} type="checkbox"/>
						Required
					</Label>
					<Btn poll type="button" id="saveBtnForQWithSeveralA" onClick={this.props.save}>save</Btn>
					<Btn poll type="button">delete</Btn>
				</footer>
			</MyDiv>
		);
	}
}
export default QWithSeveralA;
