import React, { Component } from 'react';

import DefaultField from '../../commonComponents/defaultField';
import Btn from '../../commonComponents/btn';
import QuestionBox from '../questionBox';
import Box from '../../commonComponents/container';
import QFooter from '../questionFooter';

class QFile extends Component {
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

		this.upload = (event) => {
			const fileName = event.target.value;
			document.getElementById('fileName').innerHTML = fileName;
		};
	}

	render() {
		const data = this.props.data || { question: '' };
		return (
			<QuestionBox id={this.props.number} data-type="QFile">
				<header>
					<span>{this.props.number}.</span>
					<span id="requiredMark">{this.props.required ? '*' : ''}</span>
					<p>{data.question}</p>
				</header>
				<Box clone>
					<DefaultField onChange={this.upload} transparent type="file"/>
					<span id="fileName" className="fileName" />
				</Box>
				<Btn poll clone>Choose file</Btn>
				<QFooter>
					<Btn poll onClick={this.props.edit}>edit</Btn>
					<Btn poll onClick={this.props.delete}>delete</Btn>
				</QFooter>
			</QuestionBox>
		);
	}
}
export default QFile;
