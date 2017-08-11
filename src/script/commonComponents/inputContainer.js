import styled from 'styled-components';

export default styled.label`
	position: relative;
	display: ${props => (props.block || props.clone ? 'block' : 'inline')};
	height: ${props => (props.clone ? '80px' : 'auto')};
	font-size: 1.4rem;
`;
