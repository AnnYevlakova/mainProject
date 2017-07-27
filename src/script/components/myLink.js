import { Link } from 'react-router-dom';
import styled from 'styled-components';

const darkColor = '#333333';
const accentColor = '#eb1c23';

export default styled(Link)`
	position: ${props => (props.menuItem ? 'absolute' : 'relative')};
	bottom: ${props => (props.menuItem1 ? '-17px' : props.menuItem2 ? '-37px' : props.menuItem3 ? '-57px' : '0')};
	right: ${props => (props.menuItem ? '0' : 'inherit')};
	display: ${props => (props.menuItem ? 'none' : 'block')};
	width: ${props => (props.menuItem ? '100px' : 'auto')};
	margin-left: ${props => (props.header ? '40px' : '0')};
	padding: ${props => (props.menuItem ? '0 3px' : props.mainBox ? '0 10px' : 'inherit')};
	color: ${darkColor};
	background-color: ${props => (props.mainBox || props.menuItem ? '#9a9696' : 'transparent')};
	font-size: ${props => (props.menuItem ? '1.4rem' : 'inherit')};	
	text-align: ${props => (props.menuItem ? 'right' : 'inherit')};
	text-decoration: none;	
	font-weight: ${props => (props.header ? 'bold' : 'normal')};
	text-transform: ${props => (props.header ? 'uppercase' : 'inherit')};
	cursor: pointer;
	&:hover {
		color: ${accentColor};
	}
	@media (max-width: 350px) {
		width: ${props => (props.header ? 'auto' :  props.menuItem ? '100px' : '100%')};
		margin-left: ${props => (props.header ? '10px' : '0')};
		padding: ${props => (props.mainBox ? '0 50px' : '')};
  }
	@media (max-width: 910px) {
    padding: ${props => (props.mainBox ? '0 20px' : '')};
	}
`;
