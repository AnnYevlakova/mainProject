import styled from 'styled-components';

const lightColor = '#e3e3e3';
const darkColor = '#333333';

export default styled.input`
	margin-bottom: 20px;
	padding: 5px 10px;
	border: 1px solid ${lightColor};
	font-size: 1.6rem;
	outline: none;
	&:focus{
		box-shadow: inset 2px -2px 7px 0px ${lightColor};
	}
`;
