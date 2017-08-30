import styled from "styled-components";

import { lightColor } from "../../style/colors";

export default styled.input`
	height: 30px;
	padding-left: 5px;
	border: 1px solid ${lightColor};
	outline: none;
	&:focus {
		border: 1px solid #e3e3e3;
		box-shadow: inset 2px -2px 7px 0px ${lightColor};
	}
	&::-webkit-search-cancel-button {		
		-webkit-appearance: none;
	}
`;
