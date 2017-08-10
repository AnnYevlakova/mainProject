import styled from 'styled-components';

export default styled.label`
	display: ${props => (props.block ? 'block' : 'inline')};
	font-size: 1.4rem;
`;
