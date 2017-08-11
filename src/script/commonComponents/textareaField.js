import styled from 'styled-components';

import { darkColor } from '../../style/colors';

export default styled.textarea`
	display: block;
	width: 98%;
	height: 40px;
	margin-bottom: 10px;
	outline: none;
	resize: vertical;
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