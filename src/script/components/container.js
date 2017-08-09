import styled from 'styled-components';

export default styled.div`
	display: ${props => (props.flex ? 'flex' : 'block')};
	width: ${props => (props.item ? '70%' : props.item2 ? '25%' : '93%')};
	height: auto;
	margin-top: ${props => (props.pollContainer? '20px' : '0')};
	padding: ${props => (props.item || props.item2 ? '0' : props.pollContainer ? '0 10px 0 0' : '20px 5% 5% 2%')};
	background-color: ${props => (props.pollContainer? '#ffffff' : 'transparent')};
	border: ${props => (props.pollContainer? '1px solid #e3e3e3' : 'none')};
	@media (max-width: 768px) {
		width: ${props => (props.item ? '65%' : props.item2 ? '30%' : '94%')};
		padding: 3%;
	}
`;