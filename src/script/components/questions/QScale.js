import React, { Component } from 'react';
import MyField from '../myField';
import Btn from '../btn';
import MyDiv from './questionBox';
import Label from '../label';
import MyTextArea from '../textArea';

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
			<MyDiv id={this.props.number}>
				<header>
					<span>{this.props.number}. <i className="fa fa-battery-half" aria-hidden="true" /></span>
					<MyTextArea placeholder="Question" />
				</header>
				<MyField data-id="from" placeholder="scale from"/>
				<MyField data-id="to" placeholder="scale to"/>
				<footer>
					<Label className={this.props.required ? '' : 'hidden'}>
						<MyField data-id='requiredField' checkbox onChange={this.isRequired} type="checkbox"/>
						Required
					</Label>
					<Btn poll type="button" id="saveBtnForQScale" onClick={this.props.save}>save</Btn>
					<Btn poll type="button">delete</Btn>
				</footer>
			</MyDiv>
		);
	}
}
export default QScale;
