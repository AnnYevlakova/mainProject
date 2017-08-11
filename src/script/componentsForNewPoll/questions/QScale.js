import React, { Component } from 'react';

import DefaultField from '../../commonComponents/defaultField';
import Btn from '../../commonComponents/btn';
import QuestionBox from '../questionBox';
import QFooter from '../questionFooter';

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
		const data = this.props.data || { question: '', from: '', to: '' };
		const step = Math.round((data.to - data.from) / 10);

		return (
			<QuestionBox id={this.props.number} data-type="QScale">
				<header>
					<span>{this.props.number}.</span>
					<span id="requiredMark">{this.props.required ? '*' : ''}</span>
					<p>{data.question}</p>
				</header>
				<span>{data.from}</span>
				<DefaultField range type="range" min={data.from} max={data.to} step={Math.round(data.from / 10)} list="tickmarks" />
				<span>{data.to}</span>
				<datalist id="tickmarks">
					<option value={data.from} />
					<option value={step} />
					<option value={step * 2} />
					<option value={step * 3} />
					<option value={step * 4} />
					<option value={step * 5} />
					<option value={step * 6} />
					<option value={step * 7} />
					<option value={step * 8} />
					<option value={step * 9} />
					<option value={data.to}/>
				</datalist>
				<QFooter>
					<Btn poll onClick={this.props.edit}>edit</Btn>
					<Btn poll onClick={this.props.delete}>delete</Btn>
				</QFooter>
			</QuestionBox>
		);
	}
}
export default QScale;
