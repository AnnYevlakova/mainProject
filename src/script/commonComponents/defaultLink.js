import styled from "styled-components";

import { accentColor, darkColor, bgColor } from "../../style/colors";

export default styled.a`
	display: ${props => (props.mainBox ? "block" : "inherit")};
	height: ${props => (props.mainBox ? "100%" : "auto")};
	padding: ${props => (props.mainBox ? "0 10px" : "inherit")};
	margin-left: ${props => (props.header ? "40px" : "0px")};
	color: ${darkColor};
	text-decoration: none;	
	font-weight: ${props => (props.header ? "bold" : "normal")};
	text-transform: ${props => (props.header ? "uppercase" : "inherit")};
	background-color: ${props => (props.mainBox ? "#9a9696" : "inherit")};
	&:hover {
		color: ${props => (props.mainBox ? bgColor : accentColor)};
	}
	@media (max-width: 350px) {
		font-size: 1.3rem;
		padding: ${props => (props.mainBox ? "0 50px" : "")};
	}
	@media (max-width: 910px) {
   padding: ${props => (props.mainBox ? "0 20px" : "")};
	}
`;
