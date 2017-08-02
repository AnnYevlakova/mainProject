import styled from 'styled-components';

const lightColor = '#e3e3e3';
const darkColor = '#333333';

export const Ul = styled.ul`
	display: flex;
  justify-content: stretch;
  align-items: center;
  width: 95%;
  height: 50px;
  margin: 0;
  padding-left: 5%;
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
	width: ${props => (props.usersNav ? '30%' : '16%')};
	padding-right: ${props => (props.usersNav ? '4%' : '0')};
	display: ${props => (props.usersNav ? 'flex' : 'block')};
	justify-content: ${props => (props.usersNav ? 'flex-end' : 'center')};
  text-align: center;
  &:first-child {
	  width: ${props => (props.usersCount ? '70%' : '42%')};
	  overflow: hidden;
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
