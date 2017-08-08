import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Caption from './components/caption';
import Div from './components/container';
import MainButton from './components/mainButton';
import SearchInput from './components/searchInput';
import { Ul, Li } from './components/row';
import { Actions } from './components/actions';

export class PollsList extends Component {
	constructor(props) {
		super(props);
		this.page = 0;
		this.polls = [];

		this.showModal = (event) => {
			const target = event.target.closest('ul');
			store.dispatch({
				type: 'showPoll',
				target: target.id,
			});
			this.props.history.push('/poll');
		};
		this.search = (event) => {
			const value = event.target.value;
			const data = [];
			this.polls.forEach((item) => {
				if (item.name.indexOf(value) !== -1) {
					data.push(item);
				}
			});
			ReactDOM.render(
				<div>
					{data.slice(0, 10).map((item, i) => <Ul key={i} id={item.id}>
						<Li onClick={this.showModal}>{item.name}</Li>
						<Li>{item.changed}</Li>
						<Li>{item.answers.length}</Li>
						<Li>{item.link}</Li>
						<Li>{'link'}</Li>
						<Li><Actions showModal={this.showModal}/></Li>
					</Ul>)}
				</div>,
				document.getElementById('table'),
			);
		};
		this.renderNewPage = (event) => {
			let btn = event.target;
			if (btn.tagName === 'I') {
				btn = btn.parentElement;
			}
			const id = btn.id;
			const lastPage = this.polls.length % 10 ? 1 : 0;
			const pageCount = (Math.floor(this.polls.length / 10) - 1) + lastPage;
			if (id === 'doubleLeft') {
				if (this.page === 0) {
					return;
				} else {
					this.page = 0;
					ReactDOM.render(
						<div>
							{this.polls.slice(0, 10).map((item, i) => <Ul key={i} id={item.id}>
								<Li onClick={this.showModal}>{item.name}</Li>
								<Li>{item.changed}</Li>
								<Li>{item.answers.length}</Li>
								<Li>{item.link}</Li>
								<Li>{'link'}</Li>
								<Li><Actions showModal={this.showModal}/></Li>
							</Ul>)}
						</div>,
						document.getElementById('table'),
					);
				}
			} else if (id === 'left') {
				if (this.page === 0) {
					return;
				} else {
					this.page = this.page - 1;
					ReactDOM.render(
						<div>
							{this.polls.slice(this.page * 10, (this.page * 10) + 10).map((item, i) => {
								return <Ul key={i} id={item.id}>
									<Li onClick={this.showModal}>{item.name}</Li>
									<Li>{item.changed}</Li>
									<Li>{item.answers.length}</Li>
									<Li>{item.link}</Li>
									<Li>{'link'}</Li>
									<Li><Actions showModal={this.showModal}/></Li>
								</Ul>;
							}
							)}
						</div>,
						document.getElementById('table'),
					);
				}
			} else if (id === 'right') {
				if (this.page === pageCount) {
					return;
				} else {
					this.page = this.page + 1;
					ReactDOM.render(
						<div>
							{this.polls.slice(this.page * 10, (this.page * 10) + 10).map((item, i) => {
								return <Ul key={i} id={item.id}>
									<Li onClick={this.showModal}>{item.name}</Li>
									<Li>{item.changed}</Li>
									<Li>{item.answers.length}</Li>
									<Li>{item.link}</Li>
									<Li>{'link'}</Li>
									<Li><Actions showModal={this.showModal}/></Li>
								</Ul>;
							})
							}
						</div>,
						document.getElementById('table'),
					);
				}
			} else if (id === 'doubleRight') {
				if (this.page === pageCount) {
					return;
				} else {
					this.page = pageCount;
					ReactDOM.render(
						<div>
							{this.polls.slice(this.page * 10).map((item, i) => <Ul key={i} id={item.id}>
								<Li onClick={this.showModal}>{item.name}</Li>
								<Li>{item.changed}</Li>
								<Li>{item.answers.length}</Li>
								<Li>{item.link}</Li>
								<Li>{'link'}</Li>
								<Li><Actions showModal={this.showModal}/></Li>
							</Ul>)}
						</div>,
						document.getElementById('table'),
					);
				}
			}
		};
		this.createPoll = () => {
			document.getElementById('newPoll').click();
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
	componentDidMount() {
		document.getElementById('pollsCount').innerHTML = this.polls.length;
		ReactDOM.render(
			<div>
				{this.polls.slice(0, 10).map((item, i) => <Ul key={i} id={item.id}>
					<Li onClick={this.showModal}>{item.name}</Li>
					<Li>{item.changed}</Li>
					<Li>{item.answers.length}</Li>
					<Li>{item.link}</Li>
					<Li>{'link'}</Li>
					<Li><Actions showModal={this.showModal}/></Li>
				</Ul>)}
			</div>,
			document.getElementById('table'),
		);
	}
	render() {
		return(
			<Div>
				<div className="captionBox">
					<Caption cap>My Polls</Caption>
					<MainButton onClick={this.createPoll} caption value="create poll" type="button"/>
					<label className="searchLabel">
						<SearchInput onChange={this.search} type="search" placeholder="search..." />
						<i className="fa fa-search searchButton" aria-hidden="true" />
					</label>
				</div>
				<section className="pollsList">
					<Ul colorRow>
						<Li non>Name</Li>
						<Li>Changed</Li>
						<Li>Answers</Li>
						<Li>Link</Li>
						<Li>Results</Li>
						<Li>Actions</Li>
					</Ul>
					<div id="table" className="table" />
					<Ul colorRow>
						<Li count>Polls count: <span id="pollsCount">{this.pollsCount}</span></Li>
						<Li nav>
							<button className="navButton" id="doubleLeft" onClick={this.renderNewPage}>
								<i className="fa fa-angle-double-left" aria-hidden="true" />
							</button>
							<button className="navButton" id="left" onClick={this.renderNewPage}>
								<i className="fa fa-angle-left" aria-hidden="true" />
							</button>
							<button className="navButton" id="right" onClick={this.renderNewPage}>
								<i className="fa fa-angle-right" aria-hidden="true" />
							</button>
							<button className="navButton" id="doubleRight" onClick={this.renderNewPage}>
								<i className="fa fa-angle-double-right" aria-hidden="true" />
							</button>
						</Li>
					</Ul>
				</section>
			</Div>
		);
	}
}