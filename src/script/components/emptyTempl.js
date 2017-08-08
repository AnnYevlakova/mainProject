import React, { Component } from 'react';
import styled from 'styled-components';
import MyDiv from './questions/questionBox';

const MyP = styled.p`
	margin: 5px 10px;
	font-size: 12px;
`;
class EmptyTempl extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<MyDiv>
				<MyP>Choose type of new question</MyP>
			</MyDiv>
		);
	}
}
export default EmptyTempl;
