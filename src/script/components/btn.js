import styled from 'styled-components';

const accentColor = '#eb1c23';
const lightColor = '#e3e3e3';
const darkColor = '#333333';

export default styled.button`
	width: ${props => (props.poll ? 'auto' : '20px')};
  height: 30px;
  padding: ${props => (props.poll ? '5px' : '0')};
  margin-left: 10px;
  border: ${props => (props.poll ? `1px solid ${lightColor}` : 'none')};
  background-color: transparent;
  font-size: ${props => (props.poll ? '1.4rem' : '2.4rem')};
  color: ${darkColor};
  outline: none;
  cursor: pointer;
  &:hover{
    border: ${props => (props.poll ? `1px solid ${accentColor}` : 'none')};
    background-color: ${props => (props.poll ? accentColor : 'transparent')};
    color: ${props => (props.poll ? '#ffffff' : 'inherit')};
  }
  @media (max-width: 500px) {
    margin-left: 5px;
    font-size: 2.0rem;   
   }
`;