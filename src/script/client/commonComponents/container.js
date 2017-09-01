import styled from "styled-components";

import { bgColor, lightColor } from "../../../style/colors";

export default styled.div`
	position: relative;
	display: ${props => (props.flex ? "flex" : "block")};
	width: ${props => (props.item ? "70%" : props.item2 ? "25%" : "93%")};
	height: ${props => (props.clone ? "80px" : "auto")};
	margin-top: ${props => (props.pollContainer ? "20px" : "0")};
	padding: ${props => (props.item || props.item2 || props.clone
        ? "0"
        : props.pollContainer
            ? "0 10px 0 0"
            : "20px 5% 5% 2%"
    )};
	background-color: ${props => (props.pollContainer ? bgColor : "transparent")};
	border: ${props => (props.pollContainer ? `1px solid ${lightColor}` : "none")};
	@media (max-width: 768px) {
		width: ${props => (props.item ? "65%" : props.item2 ? "30%" : "94%")};
		padding: 3%;
	}
`;
