import styled from 'styled-components';

const lightColor = '#e3e3e3';
const darkColor = '#333333';

export const Ul = styled.ul`
	display: flex;
	flex-direction: ${props => (props.userInfo ? 'column' : 'row')};
  justify-content: stretch;
  align-items: center;
  width: 95%;
  height: ${props => (props.userInfo ? 'auto' : '50px')};
  margin: ${props => (props.userInfo ? '40px 0 0 0' : '0')};
  padding-left: ${props => (props.userInfo ? '0' : '5%')};
  list-style: none;
  background-color: ${props => (props.colorRow ? lightColor : 'inherit')};
  border-bottom: ${props => (props.colorRow ? `1px solid ${darkColor}` : 'inherit')};
  &:last-child {
    border-bottom: none;
    border-top: ${props => (props.colorRow ? `1px solid ${darkColor}` : 'inherit')};
  }  
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`;
export const Li = styled.li`
	width: ${props => (props.usersNav ? '30%' : props.userInfo ? '100%' : '16%')};
	padding-right: ${props => (props.usersNav ? '4%' : '0')};
	display: ${props => (props.usersNav ? 'flex' : 'block')};
	justify-content: ${props => (props.usersNav ? 'flex-end' : 'center')};
  text-align: ${props => (props.userInfo ? 'left' : 'center')};
  &:first-child {
	  width: ${props => (props.usersCount ? '70%' : props.userInfo ? '100%' : '42%')};
	  overflow: ${props => (props.userInfo ? 'visible' : 'hidden')}; 
	  text-overflow: ellipsis;
	  text-align: left;
	}
	@media (max-width: 600px) {
	&:first-child {
	  width: ${props => (props.usersCount ? '70%' : '20%')};
	 }
		width: ${props => (props.usersNav ? '30%' : '20%')};
	}
	@media (max-width: 500px) {
`;
