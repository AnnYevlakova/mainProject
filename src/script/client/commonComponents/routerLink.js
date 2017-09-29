import { Link } from "react-router-dom";
import styled from "styled-components";

import { accentColor, darkColor, bgColor, lightColor } from "../../../style/colors";

export default styled(Link)`
	position: ${props => (props.menuItem ? "absolute" : "relative")};
	bottom: ${props => (props.menuItem1 ? "-17px" : props.menuItem2 ? "-37px" : props.menuItem3 ? "-57px" : "0")};
	right: ${props => (props.menuItem ? "0" : "inherit")};
	display: ${props => (props.menuItem ? "none" : "block")};
	width: ${props => (props.menuItem ? "100px" : props.nav ? "100%" : "auto")};
	height: ${props => (props.nav ? "40px" : "auto")};
	margin-left: ${props => (props.header ? "40px" : "0")};
	padding: ${props => (props.menuItem ? "0 3px" : props.mainBox ? "0 10px" : "0")};
	color: ${darkColor};
	border-bottom: ${props => (props.nav ? `1px solid ${lightColor}` : "none")};
	background-color: ${props => (props.mainBox || props.menuItem ? "#9a9696" : props.nav ? bgColor : "transparent")};
	font-family: ${props => (props.nav ? "Arial" : "Open Sans")};
	font-size: ${props => (props.menuItem ? "1.4rem" : props.nav ? "1.33rem" : "inherit")};	
	text-align: ${props => (props.menuItem ? "right" : "center")};
	text-decoration: none;	
	font-weight: ${props => (props.header || props.nav ? "bold" : "normal")};
	text-transform: ${props => (props.nav || props.header ? "uppercase" : "inherit")};
	line-height: ${props => (props.nav ? "40px" : "inherit")};
	cursor: pointer;
	&:hover {
		color: ${props => (props.mainBox || props.nav ? bgColor : props.login ? accentColor : accentColor)};
		border: 'none';
		border-bottom: ${props => (props.nav ? `1px solid ${accentColor}` : "none")};
		background-color: ${props => (props.nav ? accentColor : "transparent")};
	}
	@media (max-width: 910px) {
        padding: ${props => (props.mainBox ? "0 20px" : "2px 10px")};
	}
	@media (max-width: 768px) {
		width: auto;
		font-size: ${props => (props.nav ? "1.1rem" : "inherit")};
	}
	@media (max-width: 480px) {
		width: ${props => (props.header || props.nav ? "auto" : props.menuItem ? "100px" : "inherit")};
		margin-left: ${props => (props.header ? "10px" : "0")};
		padding: ${props => (props.mainBox ? "0 5px" : "2px 10px")};
  }
	
`;
