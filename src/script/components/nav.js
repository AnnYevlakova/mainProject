import styled from 'styled-components';

export default styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 20%;
	max-width: 220px;
	height: 100%;
	padding: 10px 20px;
	list-style: none;
	@media (max-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height: auto;
		max-width: 100%;
		padding: 5px 0;
  	}
`;
