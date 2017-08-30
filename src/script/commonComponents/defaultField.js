import styled from "styled-components";

import { lightColor, darkColor } from "../../style/colors";

export default styled.input`
	position: ${props => (props.transparent ? "absolute" : "relative")};
	top: ${props => (props.transparent ? "0" : "0")};
	left: ${props => (props.transparent ? "0" : "0")};
	z-index: ${props => (props.transparent ? "10" : "0")};
	opacity: ${props => (props.transparent ? "0" : "1")}; 
	width: ${props => (props.userInfo ? "100%" : props.transparent ? "80px" : props.poll || props.range ? "85%" : "auto")};
	margin-bottom: ${props => (props.userInfo || props.checkbox || props.transparent ? "0" : "20px")};
	padding: 5px 10px;
	border: 1px solid ${lightColor};
	font-size: 1.6rem;
	color: ${darkColor};
	outline: none;
	&:focus{
		box-shadow: ${props => (props.checkbox || props.range ? "none" : `inset 2px -2px 7px 0px ${lightColor}`)};	
	}
	&::-webkit-input-placeholder {
    color: ${darkColor};
	},
	&::-moz-placeholder {
    color: ${darkColor};
	},
	&:-ms-input-placeholder {
    color: ${darkColor};
	},
	&::-ms-expand {
    color: ${darkColor};
	}
`;
