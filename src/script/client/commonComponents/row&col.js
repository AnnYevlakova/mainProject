import styled from "styled-components";

import { lightColor, darkColor } from "../../../style/colors";

export const Row = styled.ul`
	display: flex;
	flex-direction: ${props => (props.userInfo ? "column" : "row")};
  justify-content: stretch;
  align-items: center;
  width: 95%;
  height: ${props => (props.userInfo ? "auto" : "50px")};
  margin: ${props => (props.userInfo ? "40px 0 0 0" : "0")};
  padding-left: ${props => (props.userInfo ? "0" : "5%")};
  list-style: none;
  background-color: ${props => (props.colorRow ? lightColor : "#f4f4f4")};
  border-bottom: ${props => (props.colorRow ? `1px solid ${darkColor}` : "inherit")};
  &:last-child {
    border-bottom: none;
    border-top: ${props => (props.colorRow ? `1px solid ${darkColor}` : "inherit")};
  }  
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`;
export const Col = styled.li`
	width: ${props => (props.nav ? "30%" : props.userInfo ? "100%" : "16%")};
	padding-right: ${props => (props.nav ? "4%" : "0")};
	margin-bottom: ${props => (props.userInfo ? "20px" : "0")};
	display: ${props => (props.nav ? "flex" : "block")};
	justify-content: ${props => (props.nav ? "flex-end" : "center")};
    text-align: ${props => (props.userInfo ? "left" : "center")};
    &:first-child {
        width: ${props => (props.count ? "70%" : props.userInfo ? "100%" : "42%")};
        overflow: ${props => (props.userInfo ? "visible" : "hidden")}; 
        text-overflow: ellipsis;
        text-align: left;
    }
    @media (max-width: 600px) {
        &:first-child {
            width: ${props => (props.count ? "70%" : props.userInfo ? "100%" : "20%")};
        }
        width: ${props => (props.nav ? "30%" : props.userInfo ? "100%" : "20%")};
    }
`;
