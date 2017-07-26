import styled from 'styled-components';
const darkColor = '#333333';

export default styled.a`
	color: ${darkColor};
	text-decoration: none;
	margin-left: ${props => (props.header ? '40px' : '0')};
	font-weight: ${props => (props.header ? 'bold' : 'normal')};
	text-transform: ${props => (props.header ? 'uppercase' : 'inherit')};
	&:hover {
		color: @accent-c;
	}
	@media (max-width: 340px) {
		font-size: 1.3rem;
	}
`;