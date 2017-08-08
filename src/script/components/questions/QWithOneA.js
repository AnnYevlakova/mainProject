import React, { Component } from 'react';
import MyField from '../myField';
import Btn from '../btn';
import MyDiv from './questionBox';
import Label from '../label';
import MyTextArea from '../textArea';

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
			<MyDiv id={this.props.number}>
				<header>
					<span>{this.props.number}. <i className="fa fa-list" aria-hidden="true" /></span>
					<MyTextArea placeholder="Question" />
				</header>
				<ul>
					<li>
						<Label className="label">
							<MyField poll type="text" placeholder="answer1"/>
							<Btn onClick={this.delete}><i className="fa fa-trash" aria-hidden="true" /></Btn>
						</Label>
					</li>
					<li>
						<Label className="label">
							<MyField poll type="text" placeholder="answer2"/>
							<Btn><i className="fa fa-trash" aria-hidden="true" /></Btn>
						</Label>
					</li>
					<li>
						<Label className="label">
							<MyField poll type="text" placeholder="answer3"/>
							<Btn><i className="fa fa-trash" aria-hidden="true" /></Btn>
						</Label>
					</li>
					<li>
						<Label className="label">
							<MyField poll type="text" placeholder="answer4"/>
							<Btn><i className="fa fa-trash" aria-hidden="true" /></Btn>
						</Label>
					</li>
					<li>
						<Label className="label">
							<MyField poll type="text" placeholder="answer5"/>
							<Btn><i className="fa fa-trash" aria-hidden="true" /></Btn>
						</Label>
					</li>
				</ul>
				<footer>
					{this.props.required ?
						<label><MyField onChange={this.isRequired} type="checkbox"/> Required</label> :
						''}
					<Btn poll type="button">save</Btn>
					<Btn poll type="button">delete</Btn>
				</footer>
			</MyDiv>
		);
	}
}
export default QWithOneA;
