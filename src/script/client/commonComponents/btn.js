import styled from "styled-components";

import { accentColor, lightColor, darkColor } from "../../../style/colors";

export default styled.button`  
    outline: none;
    cursor: pointer;
    display: ${props => (props.deleteQField ? "inline" : "block")};
	position: ${props => (props.clone ? "absolute" : "relative")};
	top: ${props => (props.clone ? "45%" : "0")};
	left: ${props => (props.clone ? "0" : "0")};
	z-index: ${props => (props.clone ? "5" : "0")};
	width: ${props => (props.poll ? "auto" : props.block ? "100%" : "20px")};
    height: ${props => (props.clone ? "30px" : "100%")};
    padding: ${props => (props.poll ? "5px" : "0")};
    margin-left: ${props => (props.block || props.deleteQField ? "0" : "10px")};
    border: ${props => (props.poll ? `1px solid ${lightColor}` : "none")};
    background-color: transparent;
    font-size: ${props => (props.block || props.poll ? "1.4rem'" : "2.0rem")};
    color: ${darkColor};
    text-align: ${props => (props.block ? "left" : "center")};  
    &:hover{
        border: ${props => (props.poll ? `1px solid ${accentColor}` : "none")};
        background-color: ${props => (props.poll ? accentColor : "transparent")};
        color: ${props => (props.poll ? "#ffffff" : "inherit")};
    }
    @media (max-width: 500px) {
        margin-left: 5px;
        font-size: 2.0rem;   
    }
`;
