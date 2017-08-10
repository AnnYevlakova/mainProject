import styled from 'styled-components';

import { lightColor } from '../../style/colors';

export default styled.input`
	width: ${props => (props.userInfo ? '100%' : props.checkbox ? 'auto' : props.poll ? '85%' : 'auto')};
	margin-bottom: ${props => (props.userInfo || props.checkbox ? '0' : '20px')};
	padding: 5px 10px;
	border: 1px solid ${lightColor};
	font-size: 1.6rem;
	outline: none;
	&:focus{
		box-shadow: ${props => (props.checkbox ? 'none' : `inset 2px -2px 7px 0px ${lightColor}`)};	
	}
`;
