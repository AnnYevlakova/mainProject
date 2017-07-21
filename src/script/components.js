import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const bgColor = '#ffffff';
const lightColor= '#e3e3e3';
const darkColor= '#333333';
const accentColor= '#eb1c23';

export const MainButton = styled.input`
  display: block;
  width: ${props => props.nav ? '100%' : 'auto'};
  height: 35px;
  padding: 5px 15px;
  margin: auto;
  border: none;
  color: ${bgColor};
  background-color: ${accentColor};
  text-transform: uppercase;
  margin-top: ${props => props.nav ? '40px' : '0'};
  cursor: pointer;
  &:hover {
    border: 2px solid ${accentColor};
    color: ${accentColor};
    background-color: ${bgColor};
  }
  &:last-child {
  	margin-bottom: ${props => props.nav ? 'auto' : '0'};
  }
  @media (max-width: 768px) {
  	width: auto;
  	margin-top: 0;
  }
  @media (max-width: 430px) {
  	padding: 5px;
  	text-transform: lowercase;
  }
`;
export const Nav = styled.nav`
	display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  max-width: 310px;
  height: 100%;
  padding: 10px 20px;
  list-style: none;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 100%;
    padding: 5px 0 0;
  }
`;
export const MyLink = styled(Link)`
  color: ${darkColor};
  text-decoration: none;
  margin-left: ${props => props.header ? '40px' : '0'};
  font-weight: ${props => props.header ? 'bold' : 'normal'};
  text-transform: ${props => props.header ? 'uppercase' : 'inherit'};
  cursor: pointer;
  &:hover {
		color: ${accentColor};
	}
	@media (max-width: 360px) {
    width: 100%;
  }
}
`;
export const Caption = styled.p`
	text-align: center;
`;
export const MyField= styled.input`
	margin-bottom: 20px;
	padding: 5px 10px;
  border: 1px solid ${lightColor};
  font-size: 1.6rem;
  outline: none;
  &:focus{
  	border-width: 2px;
	}
`;