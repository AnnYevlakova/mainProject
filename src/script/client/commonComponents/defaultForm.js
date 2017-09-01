import styled from "styled-components";

export default styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	width: 50%;
	max-width: 450px;
	height: auto;
	padding: 20px 30px;
	margin-top: 5%;
	border: 1px solid #e3e3e3;
	background-color: #ffffff;
	@media (max-width: 600px) {
		width: 90%;
		max-width: 90%;
		padding: 5px;
		font-size: 1.6rem;
		margin: 10% auto 0 auto;
	}
`;
