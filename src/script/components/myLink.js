import { Link } from 'react-router-dom';
import styled from 'styled-components';

const darkColor = '#333333';
const accentColor = '#eb1c23';

export default styled(Link)`
	color: ${darkColor};
	text-decoration: none;
	margin-left: ${props => (props.header ? '40px' : '0')};
	font-weight: ${props => (props.header ? 'bold' : 'normal')};
	text-transform: ${props => (props.header ? 'uppercase' : 'inherit')};
	cursor: pointer;
	&:hover {
		color: ${accentColor};
	}
	@media (max-width: 360px) {
		width: ${props => (props.header ? 'auto' : '100%')};
		margin-left: ${props => (props.header ? '10px' : '0')};
  	}
`;
