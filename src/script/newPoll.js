import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
import QWithOneATempl from './componentsForNewPoll/questionsTempl/QWithOneATempl';
import QWithSeveralATempl from './componentsForNewPoll/questionsTempl/QWithSeveralATempl';
import QTextTempl from './componentsForNewPoll/questionsTempl/QTextTempl';
import QFileTempl from './componentsForNewPoll/questionsTempl/QFileTempl';
import QRatingTempl from './componentsForNewPoll/questionsTempl/QRatingTempl';
import QScaleTempl from './componentsForNewPoll/questionsTempl/QScaleTempl';

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
		this.polls = store.getState().userPolls || JSON.parse(localStorage.getItem('userPolls'));
		this.questionsCount = 0;
		this.required = false;
		this.processBar = false;
		this.directTo = (event) => {
			const direct = event.target.id;

			this.props.history.push(`/${direct}`);
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

		this.isWithProcessBar = (event) => {
			const target = event.target;

			this.processBar = target.checked;
			console.log(this.processBar);
		};

		this.isNumeric = (number) => {
			return !isNaN(parseFloat(number)) && isFinite(number);
		};

		this.renderQ = (questions) => {
			if (questions.length === 0) {
				ReactDOM.render(
					<QuestionBox>Choose type of new question</QuestionBox>,
					document.getElementById('pollsContainer'),
				);
				return;
			}
			ReactDOM.render(
				<div>
					{questions.map((item, i) => {
						if (item === null) return '';
						if (item === 'QWithOneA') {
							return <QWithOneA required={this.required} data={this.questionsData[i]} number={i + 1} edit={this.editQ} delete={this.deleteQ}/>;
						}
						if (item === 'QWithOneATempl') {
							return <QWithOneATempl required={this.required} data={this.questionsData[i]} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						}
						if (item === 'QWithSeveralA') {
							return <QWithSeveralA required={this.required} data={this.questionsData[i]} number={i + 1} edit={this.editQ} delete={this.deleteQ}/>;
						}
						if (item === 'QWithSeveralATempl') {
							return <QWithSeveralATempl required={this.required} data={this.questionsData[i]} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						}
						if (item === 'QText') {
							return <QText required={this.required} data={this.questionsData[i]} number={i + 1} edit={this.editQ} delete={this.deleteQ}/>;
						}
						if (item === 'QTextTempl') {
							return <QTextTempl required={this.required} data={this.questionsData[i]} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						}
						if (item === 'QFile') {
							return <QFile required={this.required} data={this.questionsData[i]} number={i + 1} edit={this.editQ} delete={this.deleteQ}/>;
						}
						if (item === 'QFileTempl') {
							return <QFileTempl required={this.required} data={this.questionsData[i]} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						}
						if (item === 'QRating') {
							return <QRating required={this.required} data={this.questionsData[i]} number={i + 1} edit={this.saveQ} delete={this.deleteQ}/>;
						}
						if (item === 'QRatingTempl') {
							return <QRatingTempl required={this.required} data={this.questionsData[i]} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						}
						if (item === 'QScale') {
							return <QScale required={this.required} data={this.questionsData[i]} number={i + 1} edit={this.editQ} delete={this.deleteQ}/>;
						}
						if (item === 'QScaleTempl') {
							return <QScaleTempl required={this.required} data={this.questionsData[i]} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
						}
					})}
				</div>,
				document.getElementById('pollsContainer'),
			);
		};

		this.editQ = (event) => {
			const target = event.target.closest('div');
			this.questions[target.id - 1] = `${target.getAttribute('data-type')}Templ`;
			this.renderQ(this.questions);
		};

		this.deleteQ = (event) => {
			const target = event.target.closest('div');

			this.questions.splice(target.id - 1, 1);
			this.questionsData.splice(target.id - 1, 1);
			this.questionsData = this.questionsData.map((item, i) => {
				if (item.number != i + 1) {
					item.number = i + 1;
				}
				return item;
			});
			document.getElementById('pollsContainer').innerHTML = '';
			this.renderQ(this.questions);
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
			const type = target.getAttribute('data-type').split('Tem')[0];
			this.questions[target.id - 1] = type;

			if (target.getAttribute('data-type') === 'QWithOneATempl' || target.getAttribute('data-type') === 'QWithSeveralATempl') {
				let answers = Array.from(target.querySelectorAll('input[data-type="answer"]'));

				if (!target.querySelector('textarea').value) {
					target.querySelector('textarea').classList.add('wrong');
				}
				if (this.questionsData[target.id - 1]) {
					const existingAnswers = this.questionsData[target.id - 1].answers;

					answers = answers.filter((item, i) => {
						if (item.value === '' && existingAnswers[i]) {
							return item;
						} else if (item.value !== '') {
							return item;
						}
						return false;
					});
					answers = answers.map((item, i) => item.value || existingAnswers[i]);
				} else {
					answers = answers.filter((item) => {
						if (item.value !== '') {
							return item;
						}
						return false;
					});
					answers = answers.map(item => item.value);
				}

				qData = {
					type: this.questionsData[target.id - 1] ? this.questionsData[target.id - 1].type : type,
					number: this.questionsData[target.id - 1] ? this.questionsData[target.id - 1].number : target.id,
					question: target.querySelector('textarea').value ? target.querySelector('textarea').value : this.questionsData[target.id - 1].question,
					answers,
				};
			} else if (target.getAttribute('data-type') === 'QFileTempl' ||
				target.getAttribute('data-type') === 'QTextTempl' ||
				target.getAttribute('data-type') === 'QRatingTempl') {
				if (!target.querySelector('textarea').value) {
					target.querySelector('textarea').classList.add('wrong');
				}

				qData = {
					type: this.questionsData[target.id - 1] ? this.questionsData[target.id - 1].type : type,
					number: this.questionsData[target.id - 1] ? this.questionsData[target.id - 1].number : target.id,
					question: target.querySelector('textarea').value ? target.querySelector('textarea').value : this.questionsData[target.id - 1].question,
				};
			} else if (target.getAttribute('data-type') === 'QScaleTempl') {
				const question = target.querySelector('textarea');
				const from = target.querySelector('input[data-id="from"]');
				const to = target.querySelector('input[data-id="to"]');

				question.classList.remove('wrong');
				from.classList.remove('wrong');
				to.classList.remove('wrong');

				if (!question.value) {
					question.classList.add('wrong');
				}
				if (!from.value || !this.isNumeric(from.value)) {
					from.classList.add('wrong');
				}
				if (!to.value || !this.isNumeric(to.value)) {
					to.classList.add('wrong');
				}

				qData = {
					type: this.questionsData[target.id - 1] ? this.questionsData[target.id - 1].type : 'QScale',
					number: this.questionsData[target.id - 1] ? this.questionsData[target.id - 1].number : target.id,
					question: question.value ? question.value : this.questionsData[target.id - 1].question,
					from: from.value ? from.value : this.questionsData[target.id - 1].from,
					to: to.value ? to.value : this.questionsData[target.id - 1].to,
				};
			}
			this.questionsData[target.id - 1] = qData;
			this.renderQ(this.questions);
		};

		this.cancelPoll = () => {
			ReactDOM.render(
				<QuestionBox>Choose type of new question</QuestionBox>,
				document.getElementById('pollsContainer'),
			);
		};

		this.savePoll = () => {
		    const today = new Date();
            const data = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
            const id = JSON.parse(localStorage.getItem('polls')).length + 1;
            const userData = store.getState().user;
            const pollData = {
                id,
                name: document.getElementById('pollName').value || `Poll #${this.polls.length + 1}`,
                changed: data,
                answers: [],
                link: 'link',
                results: [],
                pollData: this.questionsData,
            };
            axios.post('https://5981a9d2139db000114a2d9c.mockapi.io/polls/', pollData);
            axios.put(`https://5981a9d2139db000114a2d9c.mockapi.io/users/${userData.id}`, {
                id: userData.id,
                registered: userData.registered,
                name: userData.name,
                email: userData.email,
                status: userData.status,
                polls: [...userData.polls, id],
                password: userData.password,
            });
        }
	};

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
							<InputContainer>Poll Name:
								<DefaultField type="text" id='pollName' placeholder={`Poll #${this.polls.length + 1}`}/>
							</InputContainer>
							<p>questions count: <span id="qCount">{this.questionsCount}</span></p>
							<MainButton id="save" onClick={this.savePoll} inline type="button" value="Save"/>
							<MainButton id="saveAsTempl" onClick={this.saveAsTemplate} inline type="button" value="Save as Template"/>
							<MainButton id="cancel" onClick={this.cancelPoll} type="button" inline value="Cancel"/>
							<Container pollContainer id="pollsContainer">
								<QuestionBox>Choose type of new question</QuestionBox>
							</Container>
						</Container>
						<Container item2>
							<section className="block">
								<Caption>Question Type</Caption>
								<Btn block onClick={this.addQ} id="QWithOneATempl">
									<i className="fa fa-list" aria-hidden="true" />
									Question with one answer</Btn>
								<Btn block onClick={this.addQ} id="QWithSeveralATempl">
									<i className="fa fa-list-ol" aria-hidden="true" />
									Question with several answers</Btn>
								<Btn block onClick={this.addQ} id="QTextTempl">
									<i className="fa fa-font" aria-hidden="true" />
									Text</Btn>
								<Btn block onClick={this.addQ} id="QFileTempl">
									<i className="fa fa-file" aria-hidden="true" />
									File</Btn>
								<Btn block onClick={this.addQ} id="QRatingTempl">
									<i className="fa fa-star-o" aria-hidden="true" />
									Rating</Btn>
								<Btn block onClick={this.addQ} id="QScaleTempl">
									<i className="fa fa-battery-half" aria-hidden="true" />
									Scale</Btn>
							</section>
							<section className="block">
								<Caption>Poll Options</Caption>
								{/*<InputContainer block>
									<DefaultField onChange={this.isRequired} block type="checkbox"/>
									Anonymous poll
								</InputContainer>*/}
								<InputContainer block>
									<DefaultField onChange={this.isRequired} block type="checkbox"/>
									Mark required fields
								</InputContainer>
								<InputContainer block>
									<DefaultField block type="checkbox" onChange={this.isWithProcessBar}/>
									Process bar
								</InputContainer>
							</section>
						</Container>
					</Container>
				</MainContainer>
			</div>
		);
	}
}
export default NewPoll;
