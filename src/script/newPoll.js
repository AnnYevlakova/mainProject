import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import img from 'file-loader!../img/logo.png';

import MainButton from './components/mainButton';
import Caption from './components/caption';
import Btn from './components/btn';
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
import { MenuDropdown } from './components/menuDropdown';
import MainContainer from './components/mainContainer';

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

		this.renderQ = (questions) => {
			if (questions.length === 0) {
				ReactDOM.render(
					<EmptyTempl/>,
					document.getElementById('pollsContainer'),
				);
				return;
			}
			ReactDOM.render(
				<div>
					{questions.map((item, i) => {
						if (item === null) return '';
						if (item === 'QWithOneA') return <QWithOneA required={this.required} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						if (item === 'QWithSeveralA') return <QWithSeveralA required={this.required} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						if (item === 'QText') return <QText required={this.required} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						if (item === 'QFile') return <QFile required={this.required} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						if (item === 'QRating') return <QRating required={this.required} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						if (item === 'QScale') return <QScale required={this.required} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
					})}
				</div>,
				document.getElementById('pollsContainer'),
			);
		};

		this.deleteQ = (event) => {
			const target = event.target.closest('div');
			this.questions.splice(target.id - 1, 1);
			this.renderQ(this.questions);
		}

		this.addQ = (event) => {
			const target = event.target;

			this.questionsCount ++;
			document.getElementById('qCount').innerHTML = this.questionsCount;
			this.questions.push(target.id);
			this.renderQ(this.questions);
		};

		this.saveQ = (event) => {
			const target = event.target.closest('div');
			let qData = {};

			if (target.getAttribute('data-type') === 'QWithOneA' || target.getAttribute('data-type') === 'QWithSeveralA') {
				const type = target.getAttribute('data-type');
				let answers = Array.from(document.querySelectorAll(`div[data-type="${type}"] input[data-type="answer"]`));
				answers = answers.filter((item) => {
					if (item.value !== '') {
						return item;
					}
					return false;
				});
                answers = answers.map(item => item.value);
                qData = {
                    type: type,
                    number: target.id,
                    question: document.querySelector(`div[data-type=${type}] textarea`).value,
                    answers,
                };
                this.questionsData.push(qData);
            } else if (target.getAttribute('data-type') === 'QFile' ||
                target.getAttribute('data-type') === 'QText' ||
                target.getAttribute('data-type') === 'QRating') {
                /*let answers = Array.from(document.querySelectorAll('div[data-type="QWithSeveralA"] input[data-type="answer"]'));
                answers = answers.filter((item) => {
                    if (item.value !== '') {
                        return item;
                    }
                    return false;
                });
                answers = answers.map(item => item.value);
                qData = {
                    type: 'QWithSeveralA',
                    number: target.id,
                    question: document.querySelector('div[data-type="QWithSeveralA"] textarea').value,
                    answers,
                };
                this.questionsData.push(qData);*/
			}
            console.log(this.questionsData);
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
							<p>questions count: <span id="qCount">{this.questionsCount}</span></p>
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
