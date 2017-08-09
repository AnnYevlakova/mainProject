import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
import QText from './components/questions/QText';
import QFile from './components/questions/QFile';
import QRating from './components/questions/QRating';
import QScale from './components/questions/QScale';
import Btn from './components/btn';

import { MenuDropdown } from './components/menuDropdown';
import MainContainer from './components/mainContainer';
import img from 'file-loader!../img/logo.png';

class NewPoll extends Component {
	constructor(props) {
		super(props);
		this.questions = [];
		this.questionsData = [];
		this.polls = store.getState().userPolls;
		this.questionsCount = 0;
		this.required = true;
		this.directTo = (event) => {
			const direct = event.target.id;
			this.props.history.push(`/${direct}`);
		};
		this.addQ = (event) => {
			const target = event.target;
			this.questionsCount ++;
			this.questions.push(target.id);
			const questions = this.questions;
			ReactDOM.render(
				<div>
					{questions.map((item, i) => {
						if (item === 'QWithOneA') return <QWithOneA required={this.required} number={i + 1} save={this.saveQ}/>;
						if (item === 'QWithSeveralA') return <QWithSeveralA required={this.required} number={i + 1} save={this.saveQ}/>;
						if (item === 'QText') return <QText required={this.required} number={i + 1} save={this.saveQ}/>;
						if (item === 'QFile') return <QFile required={this.required} number={i + 1} save={this.saveQ}/>;
						if (item === 'QRating') return <QRating required={this.required} number={i + 1} save={this.saveQ}/>;
						if (item === 'QScale') return <QScale required={this.required} number={i + 1} save={this.saveQ}/>;
					})}
				</div>,
				document.getElementById('pollsContainer'),
			);
		};
		this.saveQ = (event) => {
			const btn = event.target;
			const Qdata = {};
		};
		this.isRequired = (event) => {
			let fieldsArray = Array.from(document.querySelectorAll('input[data-id="requiredField"]'));
			fieldsArray = fieldsArray.map(item => item.closest('label'));
			if (event.target.checked === true) {
				this.required = true;
				fieldsArray.forEach(item => item.classList.remove('hidden'));
			} else {
				this.required = false;
				fieldsArray.forEach(item => item.classList.add('hidden'));
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
							<Div pollContainer id="pollsContainer">
								<EmptyTempl/>
							</Div>
						</Div>
						<Div item2>
							<section className="block">
								<Caption>Question Type</Caption>
								<Btn block onClick={this.addQ} id="QWithOneA">
									<i className="fa fa-list" aria-hidden="true" />
									Question with one answer</Btn>
								<Btn block onClick={this.addQ} id="QWithSeveralA">
									<i className="fa fa-list-ol" aria-hidden="true" />
									Question with several answers</Btn>
								<Btn block onClick={this.addQ} id="QText">
									<i className="fa fa-font" aria-hidden="true" />
									Text</Btn>
								<Btn block onClick={this.addQ} id="QFile">
									<i className="fa fa-file" aria-hidden="true" />
									File</Btn>
								<Btn block onClick={this.addQ} id="QRating">
									<i className="fa fa-star-o" aria-hidden="true" />
									Rating</Btn>
								<Btn block onClick={this.addQ} id="QScale">
									<i className="fa fa-battery-half" aria-hidden="true" />
									Scale</Btn>
							</section>
							<section className="block">
								<Caption>Poll Options</Caption>
								<Label block><MyField onChange={this.isRequired} block type="checkbox"/> Anonymous poll</Label>
								<Label block><MyField onChange={this.isRequired} block type="checkbox"/> Mark required fields</Label>
								<Label block><MyField block type="checkbox"/> Process bar</Label>
							</section>
						</Div>
					</Div>
				</MainContainer>
			</div>
		);
	}
}
export default NewPoll;
