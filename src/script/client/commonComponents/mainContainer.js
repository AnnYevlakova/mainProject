import styled from "styled-components";

export default styled.main`
	display: flex;
	justify-content: center;
	align-items: ${props => (props.main ? "stretch" : "flex-start")};
	width: 100%;
	flex: 1 1 auto;
	max-width: 1200px;
	height: 70%;  
	margin: 0 auto;
	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
`;
