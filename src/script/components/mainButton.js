import styled from 'styled-components';

const bgColor = '#ffffff';
const accentColor = '#eb1c23';

export default styled.input`
		display: block;
		width: ${props => (props.nav ? '100%' : 'auto')};
		height: 35px;
		padding: 5px 15px;
		margin: 0 auto;
		margin-top: ${props => (props.nav ? '40px' : '0')};
		border: 2px solid ${accentColor};
		color: ${bgColor};
		background-color: ${accentColor};
		text-transform: uppercase;	
		cursor: pointer;
		font-weight: 800;
		box-shadow: -2px 4px 4px #737171;
		outline: none;
		&:hover {
				color: ${accentColor};
				background-color: ${bgColor};
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
				padding: 5px;
		}
`;
