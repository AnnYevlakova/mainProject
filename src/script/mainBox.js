import React, { Component } from 'react';
import styled from 'styled-components';
import Caption from './components/caption';
import MyLink from './components/myLink';
import Link from './components/link';
import Education from './education';
import Benefits from './benefits';
import ForStudents from './forStudents';
import OurAdvantages from './ourAdvantages';
import { Route } from 'react-router-dom';
import img1 from 'file-loader!../img/img1.jpg';
import img2 from 'file-loader!../img/img1-1.jpg';

export class MainBox extends Component {
	render() {
		return (
			<div className="mainBox">
				<div className="box1">
					<Caption mainBox>iTechArt</Caption>
					<Image src={img1} alt=""/>
					<Image big src={img2} alt=""/>
				</div>
				<div className="info">
					<nav className="infoNav">
						<Link mainBox href="https://www.itechart.com/company/" target="_blank">About us</Link>
						<MyLink mainBox to='/main/'>Education</MyLink>
						<MyLink mainBox to='/main/benefits'>Benefits</MyLink>
						<MyLink mainBox to='/main/forStudents'>For students</MyLink>
						<MyLink mainBox to='/main/ourAdvantages'>Our advantages</MyLink>
						<Link mainBox href="https://www.itechart.com/careers/" target="_blank">Vacancies</Link>
						<Link mainBox href="https://www.itechart.com/company/contacts/" target="_blank">Contacts</Link>
					</nav>
					<section>
						<Route exact path='/main/' component={Education}/>
						<Route path='/main/benefits' component={Benefits}/>
						<Route path='/main/forStudents' component={ForStudents} />
						<Route path='/main/ourAdvantages' component={OurAdvantages} />
					</section>
				</div>
			</div>
		);
	}
}
const Image = styled.img`
	display: ${props => (props.big ? 'none' : 'block')};
	width: 60%;
	height: auto;
	@media (max-width: 1070px) {
		display: ${props => (props.big ? 'block' : 'none')};
		width: ${props => (props.big ? '100%' : 'auto')};
		margin: 0 0 20px 0;
	}
`;
