import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import Caption from '../commonComponents/caption';
import DefaultLink from '../commonComponents/defaultLink';
import RouterLink from '../commonComponents/routerLink';
import Education from './education';
import Benefits from './benefits';
import ForStudents from './forStudents';
import OurAdvantages from './ourAdvantages';

import img1 from 'file-loader!../../img/img1.jpg';
import img2 from 'file-loader!../../img/img1-1.jpg';

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

class MainBox extends Component {
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
						<DefaultLink mainBox href="https://www.itechart.com/company/" target="_blank">About us</DefaultLink>
						<RouterLink mainBox to='/main/'>Education</RouterLink>
						<RouterLink mainBox to='/main/benefits'>Benefits</RouterLink>
						<RouterLink mainBox to='/main/forStudents'>For students</RouterLink>
						<RouterLink mainBox to='/main/ourAdvantages'>Our advantages</RouterLink>
						<DefaultLink mainBox href="https://www.itechart.com/careers/" target="_blank">Vacancies</DefaultLink>
						<DefaultLink mainBox href="https://www.itechart.com/company/contacts/" target="_blank">Contacts</DefaultLink>
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
export default MainBox;
