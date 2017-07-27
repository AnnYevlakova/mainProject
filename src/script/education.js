import React, { Component } from 'react';
import Caption from './components/caption';
import src from 'file-loader!../img/education.jpg';

export class Education extends Component {
	render() {
		return (
			<div>
				<Caption cap>Education</Caption>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat turpis id quam cursus fermentum. Nullam sit amet ipsum ac enim iaculis ultricies. Vestibulum tempor, erat et ultrices laoreet, felis nisl commodo est, eu dapibus nibh est eget erat. Fusce pretium malesuada nunc, sit amet vestibulum lacus porttitor eu. Ut sed ligula sagittis, tempus justo ac, feugiat dolor. Sed mollis orci et libero elementum, et mollis quam aliquet. Pellentesque leo magna, scelerisque non arcu in, blandit rutrum lectus. Nullam non odio consectetur, semper lacus sit amet, scelerisque elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
				</p>
				<img src={src} alt=""/>
			</div>
		);
	}
}
export default Education;
