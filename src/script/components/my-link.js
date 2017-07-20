import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export class MyLink extends Component {
  render() {
    return (
        <MyNewLink header={this.props.header} isUpper={this.props.aboutCompany} to={this.props.to}>{this.props.value}</MyNewLink>
    )
  }
}

const MyNewLink = styled(Link)`
  color: #333333;
  margin-left: ${props => props.header ? '40px' : '0'};
  font-weight: ${props => props.header ? 'bold' : 'normal'};
  text-transform: ${props => props.header ? 'uppercase' : 'inherit'};
  &:hover {
		color: #eb1c23;
	}
	text-decoration: ${props => props.isUpper ?  'none' : 'underline'};
  `