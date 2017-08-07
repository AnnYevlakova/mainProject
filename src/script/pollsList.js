import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import axios from 'axios';
import Caption from './components/caption';
import Div from './components/container';
import SearchInput from './components/searchInput';
import { Ul, Li } from './components/row';
import { Actions } from './components/actions';

export class PollsList extends Component {
	constructor(props) {
		super(props);
		/*this.search = (event) => {
			const value = event.target.value;
			const data = [];
			const polls = store.getState().users || JSON.parse(localStorage.getItem('users'));
			users.forEach((item) => {
				if (item.name.indexOf(value) !== -1) {
					data.push(item);
				}
			});
			ReactDOM.render(
				<div>
					{data.slice(0, 10).map((item, i) => <Ul key={i} id={item.id}>
						<Li onClick={this.showModal} >{item.name}</Li>
						<Li>{item.status}</Li>
						<Li>{item.registered}</Li>
						<Li>{item.polls.l}</Li>
						<Li><Actions showModal={this.showModal}/></Li>
					</Ul>)}
				</div>,
				document.getElementById('table'),
			);
		};*/
	}
	render() {
		return(
			<Div>
				<div className="captionBox">
					<Caption cap>My Polls</Caption>
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
						<Li pollsCount>Users count: <span id="usersCount">{this.pollsCount}</span></Li>
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