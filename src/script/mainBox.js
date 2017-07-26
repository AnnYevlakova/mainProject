import React, { Component } from 'react';
import styled from 'styled-components';
import Caption from './components/caption';
import MyLink from './components/myLink';
import Link from './components/link';
import { Education } from './education'
import { Switch, Route } from 'react-router-dom';
import img1 from 'file-loader!../img/img1.jpg';
import img2 from 'file-loader!../img/img1-1.jpg';

export class MainBox extends Component {
	constructor(props) {
		super(props);

	};
	render() {
		return (
			<div className="mainBox">
				<div className="box1">
					<Caption mainBox>iTechArt</Caption>
					<Image src={img1} alt="" />
					<Image big src={img2} alt="" />
				</div>
				<div className="info">
					<nav className="infoNav">
						<Link className="link" href="https://www.itechart.com/company/" target="_blank">About us</Link>
						<MyLink to="/user/education">Education</MyLink>
						<MyLink to="/user/benefits">Benefits</MyLink>
						<MyLink to="/user/forStudents">For students</MyLink>
						<MyLink to="/user/ourAdvantages">Our advantages</MyLink>
						<Link className="link" href="https://www.itechart.com/careers/" target="_blank">Vacancies</Link>
						<Link className="link" href="https://www.itechart.com/company/contacts/" target="_blank">Contacts</Link>
					</nav>
					<section>
						<Switch>
							<Route exact path='/user/education' component={Education} />{/*
							<Route exact path='/user/' component={benefits} />
							<Route exact path='/user/' component={forStudents} />
							<Route exact path='/user/' component={ourAdvantages} />*/}
						</Switch>
					</section>
				</div>
			</div>
		)
	};
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
export const Users = MainBox;