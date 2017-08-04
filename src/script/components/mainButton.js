import styled from 'styled-components';

const bgColor = '#ffffff';
const accentColor = '#eb1c23';
const darkColor = '#333333';
const lightColor = '#e3e3e3';

export default styled.input`
		display: block;
		width: ${props => (props.nav ? '100%' : 'auto')};
		height: 40px;
		padding: 10px 15px;
		margin: ${props => (props.userInfo ? '0 auto 0 0 ' : props.nav ? '0' : '0 auto')};
		border: none;
		border-bottom: 1px solid ${lightColor};
		color: ${props => (props.nav ? darkColor : bgColor)};
		background-color: ${props => (props.nav ? bgColor : accentColor)};
		text-transform: uppercase;	
		cursor: pointer;
		font-weight: bold;
		outline: none;
		&:hover {
				color: ${bgColor};
				border-bottom: 1px solid ${accentColor};
				background-color: ${accentColor};
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
