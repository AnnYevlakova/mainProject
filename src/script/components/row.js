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
`;
export const Li = styled.li`
	width: 16%;
  text-align: center;
  &:first-child {
	  width: 42%;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  text-align: left;
	}
`;
/*
{event.speakers.map((item, i)=>{
	return <li key={i}>
		<Image src={item.avatar} alt="" className="lectors__avatar" circle></Image>
		<span>{item.name}</span>
	</li>
})}*/
