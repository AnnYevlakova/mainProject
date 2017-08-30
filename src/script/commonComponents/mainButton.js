import styled from "styled-components";

import { accentColor, bgColor } from "../../style/colors";

export default styled.input`
    display: ${props => (props.inline ? "inline" : "block")};
    width: "auto";
    height: ${props => (props.caption ? "30px" : "40px")};
    padding: ${props => (props.caption ? "0 5px" : "10px 15px")};
    margin: ${props => (props.inline ? "0 10px 5px 0 " : props.caption ? "0 auto 0 20px" : "0 auto")};
    border: 1px solid ${accentColor};
    border-bottom: 1px solid ${accentColor};
    color: ${bgColor};
    background-color: ${accentColor};
    text-transform: uppercase;	
    cursor: pointer;
    font-weight: bold;
    outline: none;
    &:hover {
        color: ${accentColor};
        border: 1px solid ${accentColor};
        background-color: ${bgColor};
    }
    @media (max-width: 768px) {
        width: auto;
        margin-top: 0;
        font-size: 1.1rem;
    }
    @media (max-width: 480px) {
        padding: "2px 10px";
        border-width: 1px;
        font-size: 1.0rem;
    }
`;
