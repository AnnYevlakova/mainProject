import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import axios from 'axios';
import Caption from './components/caption';
import Div from './components/container';
import SearchInput from './components/searchInput';
import { Ul, Li } from './components/row';
import { Actions } from './components/actions';

export class UserList extends Component {
	constructor(props) {
		super(props);
		this.users = store.getState().users ? store.getState().users : JSON.parse(localStorage.getItem('users'));
		this.page = 0;

		this.showModal = (event) => {
			store.dispatch({
				type: 'showProfile',
				target: target.id,
			});
			this.props.history.push('/users/userInfo');
		};
		this.renderNewPage = (event) => {
			let btn = event.target;
			if (btn.tagName === 'I') {
				btn = btn.parentElement;
			}
			const id = btn.id;
			const lastPage = this.users.length % 10 ? 1 : 0;
			const pageCount = (Math.floor(this.users.length / 10) - 1) + lastPage;
			this.users.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
			});
			if (id === 'doubleLeft') {
				if (this.page === 0) {
					return;
				} else {
					this.page = 0;
					ReactDOM.render(
						<div>
							{this.users.slice(0, 10).map((item, i) => <Ul key={i} id={item.id}>
								<Li onClick={this.showModal} >{item.name}</Li>
								<Li>{item.status}</Li>
								<Li>{item.registered}</Li>
								<Li>{item.polls}</Li>
								<Li><Actions/></Li>
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
							{this.users.slice(this.page * 10, (this.page * 10) + 10).map((item, i) => {
								return <Ul key={i} id={item.id}>
									<Li onClick={this.showModal} >{item.name}</Li>
									<Li>{item.status}</Li>
									<Li>{item.registered}</Li>
									<Li>{item.polls}</Li>
									<Li><Actions/></Li>
								</Ul>;
							})
							}
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
							{this.users.slice(this.page * 10, (this.page * 10) + 10).map((item, i) => {
								return <Ul key={i} id={item.id}>
									<Li onClick={this.showModal} >{item.name}</Li>
									<Li>{item.status}</Li>
									<Li>{item.registered}</Li>
									<Li>{item.polls}</Li>
									<Li><Actions/></Li>
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
							{this.users.slice(this.page * 10).map((item, i) => <Ul key={i} id={item.id}>
								<Li onClick={this.showModal} >{item.name}</Li>
								<Li>{item.status}</Li>
								<Li>{item.registered}</Li>
								<Li>{item.polls}</Li>
								<Li><Actions/></Li>
							</Ul>)}
						</div>,
						document.getElementById('table'),
					);
				}
			}
		};
	}
	componentDidMount() {
		axios.get('https://5981a9d2139db000114a2d9c.mockapi.io/users')
			.then((data) => {
				this.users = data.data.map((user) => {
					const date = new Date(user.registered);
					user.registered = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
					return user;
				});
				this.users.sort((a, b) => {
					if (a.name > b.name) return 1;
					if (a.name < b.name) return -1;
				});
				this.usersCount = this.users.length;
				document.getElementById('usersCount').innerHTML = this.usersCount;
				ReactDOM.render(
					<div>
						{this.users.slice(0, 10).map((item, i) => <Ul key={i} id={item.id}>
							<Li onClick={this.showModal} >{item.name}</Li>
							<Li>{item.status}</Li>
							<Li>{item.registered}</Li>
							<Li>{item.polls}</Li>
							<Li><Actions/></Li>
						</Ul>)}
					</div>,
					document.getElementById('table'),
				);
				return data;
			});
	}
	render() {
		return (
			<Div>
				<div className="captionBox">
					<Caption cap>Users</Caption>
					<label className="searchLabel">
						<SearchInput type="search" placeholder="search..." />
						<i className="fa fa-search searchButton" aria-hidden="true" />
					</label>
				</div>
				<section className="userList">
					<Ul colorRow>
						<Li non>Name</Li>
						<Li>Role</Li>
						<Li>Registered</Li>
						<Li>Polls</Li>
						<Li>Actions</Li>
					</Ul>
					<div id="table" className="table" />
					<Ul colorRow>
						<Li usersCount>Users count: <span id="usersCount">{this.usersCount}</span></Li>
						<Li usersNav>
							<button className="usersNavButton" id="doubleLeft" onClick={this.renderNewPage}>
								<i className="fa fa-angle-double-left" aria-hidden="true" />
							</button>
							<button className="usersNavButton" id="left" onClick={this.renderNewPage}>
								<i className="fa fa-angle-left" aria-hidden="true" />
							</button>
							<button className="usersNavButton" id="right" onClick={this.renderNewPage}>
								<i className="fa fa-angle-right" aria-hidden="true" />
							</button>
							<button className="usersNavButton" id="doubleRight" onClick={this.renderNewPage}>
								<i className="fa fa-angle-double-right" aria-hidden="true" />
							</button>
						</Li>
					</Ul>
				</section>
			</Div>
		);
	}
}
