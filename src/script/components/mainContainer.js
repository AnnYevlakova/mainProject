import styled from 'styled-components';

export default styled.main`
	display: flex;
	justify-content: center;
	align-items: ${props => (props.user ? 'stretch' : 'flex-start')};
	flex: 1 1 auto;
	height: 70%;  
	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: flex-start;
	}
`;