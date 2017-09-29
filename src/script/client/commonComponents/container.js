import styled from "styled-components";

import { bgColor, lightColor } from "../../../style/colors";

export default styled.div`
	position: relative;
	display: ${props => (props.flex ? "flex" : "block")};
	width: ${props => (props.item || props.pollContainer ? "100%" : "93%")};
	height: ${props => (props.clone ? "80px" : "auto")};
	margin: ${props => (props.pollContainer ? "20px 0" : "0")};
	padding: ${props => (props.item || props.clone || props.flex || props.pollContainer ? "0" : "20px 5% 5% 2%"
    )};
	background-color: ${props => (props.pollContainer ? bgColor : "transparent")};
	border: ${props => (props.pollContainer ? `1px solid ${lightColor}` : "none")};
	@media (max-width: 768px) {
		width: ${props => (props.item ? "100%" : "94%")};
		padding: ${props => (props.item ? "0" : "3%")};
	}
`;
