import styled from 'styled-components';

export const Ul = styled.ul`
	display: flex;
	justify-content: stretch;
	align-items: center;
	width: 100%;
	height: 50px;	
	padding-left: 0;
	list-style: none;
`;
export const Li = styled.li`
	width: ${props => (props.cell0 ? '40%' : '15%')};
`;
/*
{event.speakers.map((item, i)=>{
	return <li key={i}>
		<Image src={item.avatar} alt="" className="lectors__avatar" circle></Image>
		<span>{item.name}</span>
	</li>
})}*/
