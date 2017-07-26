import styled from 'styled-components';

export default styled.h4`
	display:  ${props => (props.mainBox ? 'block' : 'inline')};
	text-align: center;
	font-weight: normal;
	font-size: ${props => (props.mainBox ? '8.0rem' : 'inherit')};
	margin-left: ${props => (props.mainBox ? 'auto' : 'inherit')};
	margin-right: ${props => (props.mainBox ? 'auto' : 'inherit')};
	@media (max-width: 1070px) {
		position: ${props => (props.mainBox ? 'absolute' : 'relative')};
		top: ${props => (props.mainBox ? '20%' : 'relative')};
		margin: ${props => (props.mainBox ? '0' : 'inherit')};
		left: ${props => (props.mainBox ? '20px' : 'relative')};
		color: ${props => (props.mainBox ? '#ffffff' : 'inherit')};		
		text-shadow: ${props => (props.mainBox ? '5px 4px 17px' : 'none')}; 
	}
	@media (max-width: 600px) {
		font-size: 6rem;
	}
	@media (max-width: 450px) {
		top: ${props => (props.mainBox ? '10%' : 'relative')};
	}
`;
