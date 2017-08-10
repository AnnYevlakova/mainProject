import styled from 'styled-components';

import { accentColor, lightColor, darkColor, bgColor } from '../../style/colors';

export default styled.input`
		display: ${props => (props.inline ? 'inline' : 'block')};
		width: ${props => (props.nav ? '100%' : 'auto')};
		height: ${props => (props.caption ? '30px' : '40px')};
		padding: ${props => (props.caption ? '0 5px' : '10px 15px')};
		margin: ${props => (props.inline ? '0 10px 5px 0 ' : props.caption ? '0 auto 0 20px' : props.nav ? '0' : '0 auto')};
		border: ${props => (props.nav ? 'none' : `1px solid ${accentColor}`)};
		border-bottom: ${props => (props.inline ? `1px solid ${accentColor}` : `1px solid ${lightColor}`)};
		color: ${props => (props.nav ? darkColor : bgColor)};
		background-color: ${props => (props.nav ? bgColor : accentColor)};
		text-transform: uppercase;	
		cursor: pointer;
		font-weight: bold;
		outline: none;
		&:hover {
				color: ${props => (props.nav ? bgColor : accentColor)};
				border: ${props => (props.nav ? 'none' : `1px solid ${accentColor}`)};
				border-bottom: 1px solid ${accentColor};
				background-color: ${props => (props.nav ? accentColor : bgColor)};
		}
		@media (min-width: 768px) {
			&:last-child {
				margin-bottom: ${props => (props.nav ? 'auto' : '0')};
			}
		}
		@media (max-width: 768px) {
				width: auto;
				margin-top: 0;
				font-size: 1.1rem;
		}
		@media (max-width: 480px) {
				padding: ${props => (props.nav ? '2px' : '2px 10px')};
				border-width: 1px;
				font-size: 1.0rem;
		}
`;
