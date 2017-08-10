import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import store from './logic/store';
import img from 'file-loader!../img/logo.png';

import MainButton from './commonComponents/mainButton';
import Caption from './commonComponents/caption';
import Btn from './commonComponents/btn';
import Container from './commonComponents/container';
import DefaultField from './commonComponents/defaultField';
import DefaultLink from './commonComponents/defaultLink';
import Navigation from './commonComponents/navigation';
import InputContainer from './commonComponents/inputContainer';
import MenuDropdown from './commonComponents/menuDropdown';
import MainContainer from './commonComponents/mainContainer';
import QuestionBox from './componentsForNewPoll/questionBox';
import QWithOneA from './componentsForNewPoll/questions/QWithOneA';
import QWithSeveralA from './componentsForNewPoll/questions/QWithSeveralA';
import QText from './componentsForNewPoll/questions/QText';
import QFile from './componentsForNewPoll/questions/QFile';
import QRating from './componentsForNewPoll/questions/QRating';
import QScale from './componentsForNewPoll/questions/QScale';


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
					<QuestionBox/>,
					document.getElementById('pollsContainer'),
				);
				return;
			}
			ReactDOM.render(
				<div>
					{questions.map((item, i) => {
						if (item === null) return '';
						if (item === 'QWithOneA') {
							return <QWithOneA required={this.required} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						}
						if (item === 'QWithSeveralA') {
							return <QWithSeveralA required={this.required} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						}
						if (item === 'QText') {
							return <QText required={this.required} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						}
						if (item === 'QFile') {
							return <QFile required={this.required} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						}
						if (item === 'QRating') {
							return <QRating required={this.required} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						}
						if (item === 'QScale') {
							return <QScale required={this.required} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						}
					})}
				</div>,
				document.getElementById('pollsContainer'),
			);
		};

		this.deleteQ = (event) => {
			const target = event.target.closest('div');

			this.questions.splice(target.id - 1, 1);
			this.questionsData.splice((target.id - 1, 1));
			this.renderQ(this.questions);
			console.log(this.questionsData);
		};

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
				let answers = Array.from(target.querySelectorAll('input[data-type="answer"]'));

				answers = answers.filter((item) => {
					if (item.value !== '') {
						return item;
					}
					return false;
				});
				answers = answers.map(item => item.value);
				qData = {
					type,
					number: target.id,
					question: target.querySelector('textarea').value,
					answers,
				};
			} else if (target.getAttribute('data-type') === 'QFile' ||
				target.getAttribute('data-type') === 'QText' ||
				target.getAttribute('data-type') === 'QRating') {
				const type = target.getAttribute('data-type');

				qData = {
					type,
					number: target.id,
					question: target.querySelector('textarea').value,
				};
			} else if (target.getAttribute('data-type') === 'QScale') {
				qData = {
					type: 'QScale',
					number: target.id,
					question: target.querySelector('textarea').value,
					from: target.querySelector('input[data-id="from"]').value,
					to: target.querySelector('input[data-id="to"]').value,
				};
			}
			if (this.questionsData[target.id - 1]) {
				this.questionsData[target.id - 1] = qData;
			} else {
				this.questionsData.push(qData);
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
						<DefaultLink header className="link" href="https://www.itechart.com/" target="_blank">about us</DefaultLink>
						<MenuDropdown/>
					</nav>
				</header>
				<MainContainer main>
					<Navigation>
						<MainButton id="main" onClick={this.directTo} nav type="button" value="Main"/>
						<MainButton id="newPoll" onClick={this.directTo} nav type="button" value="New poll"/>
						<MainButton id="myPolls" onClick={this.directTo} nav type="button" value="My polls"/>
						<MainButton id="pollTemplates" onClick={this.directTo} nav type="button" value="Poll templates"/>
						<MainButton id="users" onClick={this.directTo} nav type="button" value="Users"/>
					</Navigation>
					<Container flex>
						<Container item>
							<InputContainer>Poll Name: <DefaultField type="text" value={`Poll #${this.polls.length + 1}`}/></InputContainer>
							<p>questions count: <span id="qCount">{this.questionsCount}</span></p>
							<MainButton id="save" onClick={this.save} inline type="button" value="Save"/>
							<MainButton id="saveAsTempl" onClick={this.saveAsTemplate} inline type="button" value="Save as Template"/>
							<MainButton id="cancel" onClick={this.cancel} type="button" inline value="Cancel"/>
							<Container pollContainer id="pollsContainer">
								<QuestionBox/>
							</Container>
						</Container>
						<Container item2>
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
								<InputContainer block><DefaultField onChange={this.isRequired} block type="checkbox"/> Anonymous poll</InputContainer>
								<InputContainer block><DefaultField onChange={this.isRequired} block type="checkbox"/> Mark required fields</InputContainer>
								<InputContainer block><DefaultField block type="checkbox"/> Process bar</InputContainer>
							</section>
						</Container>
					</Container>
				</MainContainer>
			</div>
		);
	}
}
export default NewPoll;
