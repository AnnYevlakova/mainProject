import styled from 'styled-components';

const bgColor = '#ffffff';
const accentColor = '#eb1c23';

export default styled.input`
		display: block;
		width: ${props => (props.nav ? '100%' : 'auto')};
		height: 35px;
		padding: 5px 15px;
		margin: auto;
		margin-top: ${props => (props.nav ? '40px' : '0')};
		border: none;
		color: ${bgColor};
		background-color: ${accentColor};
		text-transform: uppercase;	
		cursor: pointer;
		font-weight: 800;
		&:hover {
				border: 2px solid ${accentColor};
				color: ${accentColor};
				background-color: ${bgColor};
		}
		&:last-child {
			margin-bottom: ${props => (props.nav ? 'auto' : '0')};
		}
		@media (max-width: 768px) {
				width: auto;
				margin-top: 0;
		}
		@media (max-width: 430px) {
				padding: 5px;
		}
`;
