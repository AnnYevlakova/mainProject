import React, { Component } from 'react';
import Caption from './components/caption';

class ForStudents extends Component {
	render() {
		return (
			<div>
				<Caption cap>For Students</Caption>
				<ul>
					<li>The first course</li>
					<li>The second course</li>
					<li>The fourth course</li>
				</ul>
			</div>
		);
	}
}
export default ForStudents;
