import React, { Component } from 'react';

export class Row extends Component {
	render() {
		return (
			<div>
				{this.props.data.forEach((item, i) => <div className={`cell${i} cell`}>{this.props.data[i]}</div>)}
			</div>
		);
	}
}
