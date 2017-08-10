import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import store from '../logic/store';

import Caption from '../commonComponents/caption';
import Container from '../commonComponents/container';
import MainButton from '../commonComponents/mainButton';
import SearchInput from '../commonComponents/searchInput';
import { Row, Col } from '../commonComponents/row&col';
import { Actions } from '../commonComponents/actions';

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
					{data.slice(0, 10).map((item, i) => <Row key={i} id={item.id}>
						<Col onClick={this.showModal}>{item.name}</Col>
						<Col>{item.changed}</Col>
						<Col>{item.answers.length}</Col>
						<Col>{item.link}</Col>
						<Col>{'link'}</Col>
						<Col><Actions showModal={this.showModal}/></Col>
					</Row>)}
				</div>,
				document.getElementById('table'),
			);
		};
		this.renderNewPage = (event) => {
			let btn = event.target;
			const id = btn.id;
			const pageCount = (Math.ceil(this.polls.length / 10));

			if (btn.tagName === 'I') {
				btn = btn.parentElement;
			}
			if (id === 'doubleLeft') {
				if (this.page === 0) {
					return;
				} else {
					this.page = 0;
					ReactDOM.render(
						<div>
							{this.polls.slice(0, 10).map((item, i) => <Row key={i} id={item.id}>
								<Col onClick={this.showModal}>{item.name}</Col>
								<Col>{item.changed}</Col>
								<Col>{item.answers.length}</Col>
								<Col>{item.link}</Col>
								<Col>{'link'}</Col>
								<Col><Actions showModal={this.showModal}/></Col>
							</Row>)}
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
								return <Row key={i} id={item.id}>
									<Col onClick={this.showModal}>{item.name}</Col>
									<Col>{item.changed}</Col>
									<Col>{item.answers.length}</Col>
									<Col>{item.link}</Col>
									<Col>{'link'}</Col>
									<Col><Actions showModal={this.showModal}/></Col>
								</Row>;
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
								return <Row key={i} id={item.id}>
									<Col onClick={this.showModal}>{item.name}</Col>
									<Col>{item.changed}</Col>
									<Col>{item.answers.length}</Col>
									<Col>{item.link}</Col>
									<Col>{'link'}</Col>
									<Col><Actions showModal={this.showModal}/></Col>
								</Row>;
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
							{this.polls.slice(this.page * 10).map((item, i) => <Row key={i} id={item.id}>
								<Col onClick={this.showModal}>{item.name}</Col>
								<Col>{item.changed}</Col>
								<Col>{item.answers.length}</Col>
								<Col>{item.link}</Col>
								<Col>{'link'}</Col>
								<Col><Actions showModal={this.showModal}/></Col>
							</Row>)}
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
				{this.polls.slice(0, 10).map((item, i) => <Row key={i} id={item.id}>
					<Col onClick={this.showModal}>{item.name}</Col>
					<Col>{item.changed}</Col>
					<Col>{item.answers.length}</Col>
					<Col>{item.link}</Col>
					<Col>{'link'}</Col>
					<Col><Actions showModal={this.showModal}/></Col>
				</Row>)}
			</div>,
			document.getElementById('table'),
		);
	}

	render() {
		return(
			<Container>
				<div className="captionBox">
					<Caption cap>My Polls</Caption>
					<MainButton onClick={this.createPoll} caption value="create poll" type="button"/>
					<label className="searchLabel">
						<SearchInput onChange={this.search} type="search" placeholder="search..." />
						<i className="fa fa-search searchButton" aria-hidden="true" />
					</label>
				</div>
				<section className="pollsList">
					<Row colorRow>
						<Col non>Name</Col>
						<Col>Changed</Col>
						<Col>Answers</Col>
						<Col>Link</Col>
						<Col>Results</Col>
						<Col>Actions</Col>
					</Row>
					<div id="table" className="table" />
					<Row colorRow>
						<Col count>Polls count: <span id="pollsCount">{this.pollsCount}</span></Col>
						<Col nav>
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
						</Col>
					</Row>
				</section>
			</Container>
		);
	}
}
