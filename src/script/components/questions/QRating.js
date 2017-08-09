import React, { Component } from 'react';
import MyField from '../myField';
import Btn from '../btn';
import MyDiv from './questionBox';
import Label from '../label';
import MyTextArea from '../textArea';

class QRating extends Component {
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
			<MyDiv id={this.props.number} data-type="QRating">
				<header>
					<span>{this.props.number}. <i className="fa fa-star-o" aria-hidden="true" /></span>
					<MyTextArea placeholder="Question" />
				</header>
				<footer>
					<Label className={this.props.required ? '' : 'hidden'}>
						<MyField data-id='requiredField' checkbox onChange={this.isRequired} type="checkbox"/>
						Required
					</Label>
					<Btn poll type="button" id="saveBtnForQRating" onClick={this.props.save}>save</Btn>
					<Btn poll type="button" onClick={this.props.delete}>delete</Btn>
				</footer>
			</MyDiv>
		);
	}
}
export default QRating;
