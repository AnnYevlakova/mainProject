import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainButton from './components/mainButton';
import Caption from './components/caption';
import store from './store';
import Div from './components/container';
import MyField from './components/myField';
import Link from './components/link';
import Nav from './components/nav';
import Label from './components/label';
import EmptyTempl from './components/emptyTempl';
import QWithOneA from './components/questions/QWithOneA';
import QWithSeveralA from './components/questions/QWithSeveralA';

import { MenuDropdown } from './components/menuDropdown';
import MainContainer from './components/mainContainer';
import img from 'file-loader!../img/logo.png';

class NewPoll extends Component {
	constructor(props) {
		super(props);
		this.questions = [];
		this.polls = store.getState().userPolls;
		this.questionsCount = 0;
		this.required = false;
		this.directTo = (event) => {
			const direct = event.target.id;
			this.props.history.push(`/${direct}`);
		};
		this.isRequired = (event) => {
			if (event.target.value === 'on') {
				this.required = true;
			} else {
				this.required = false;
			}
		};
	}
	componentWillMount() {
		if (!store.getState().userPolls) {
			store.dispatch({
				type: 'setData',
				users: JSON.parse(localStorage.getItem('users')),
				user: JSON.parse(localStorage.getItem('users'))[localStorage.getItem('id').split('-')[1]],
				polls: JSON.parse(localStorage.getItem('polls')),
			});
		}
		this.polls = store.getState().userPolls;
	}
	render() {
		return (
			<div className="box">
				<header className="header">
					<img className="logo" src={img} alt=""/>
					<nav className="headerNav">
						<Link header className="link" href="https://www.itechart.com/" target="_blank">about us</Link>
						<MenuDropdown/>
					</nav>
				</header>
				<MainContainer main>
					<Nav>
						<MainButton id="main" onClick={this.directTo} nav type="button" value="Main"/>
						<MainButton id="newPoll" onClick={this.directTo} nav type="button" value="New poll"/>
						<MainButton id="myPolls" onClick={this.directTo} nav type="button" value="My polls"/>
						<MainButton id="pollTemplates" onClick={this.directTo} nav type="button" value="Poll templates"/>
						<MainButton id="users" onClick={this.directTo} nav type="button" value="Users"/>
					</Nav>
					<Div flex>
						<Div item>
							<Label>Poll Name: <MyField type="text" value={`Poll #${this.polls.length + 1}`}/></Label>
							<p>questions count: <span>{this.questionsCount}</span></p>
							<MainButton id="save" onClick={this.save} inline type="button" value="Save"/>
							<MainButton id="saveAsTempl" onClick={this.saveAsTemplate} inline type="button" value="Save as Template"/>
							<MainButton id="cancel" onClick={this.cancel} type="button" inline value="Cancel"/>
							<Div pollContainer>
								<QWithOneA required={this.required} number={this.questionsCount + 1}/>
								<QWithSeveralA required={this.required} number={this.questionsCount + 1}/>
								<EmptyTempl/>
							</Div>
						</Div>
						<Div item2>
							<section className="block">
								<Caption>Question Type</Caption>
								<p><i className="fa fa-list" aria-hidden="true" /> Question with one answer</p>
								<p><i className="fa fa-list-ol" aria-hidden="true" /> Question with several answers</p>
								<p><i className="fa fa-font" aria-hidden="true" /> Text</p>
								<p><i className="fa fa-file" aria-hidden="true" /> File</p>
								<p><i className="fa fa-star-o" aria-hidden="true" /> Rating</p>
								<p><i className="fa fa-battery-half" aria-hidden="true" /> Scale</p>
							</section>
							<section className="block">
								<Caption>Poll Options</Caption>
								<Label><MyField onChange={this.isRequired} checkbox type="checkbox"/> Anonymous poll</Label>
								<Label><MyField checked checkbox type="checkbox"/> Mark required fields</Label>
								<Label><MyField checkbox type="checkbox"/> Process bar</Label>
							</section>
						</Div>
					</Div>
				</MainContainer>
			</div>
		);
	}
}
export default NewPoll;
