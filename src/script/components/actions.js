import React, { Component } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
	width: 20px;
  height: 20px;
  padding: 0;
  margin-left: 10px;
  border: none;
  background-color: transparent;
  font-size: 2.4rem;
  outline: none;
  cursor: pointer;
  @media (max-width: 500px) {
    margin-left: 5px;
    font-size: 2.0rem;   
   }
`;
export class Actions extends Component {
	render() {
		return (
			<div>
				<Btn><i className="fa fa-pencil-square" aria-hidden="true" /></Btn>
				<Btn><i className="fa fa-trash" aria-hidden="true" /></Btn>
			</div>
		);
	}
}
