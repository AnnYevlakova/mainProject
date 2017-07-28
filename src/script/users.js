import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Caption from './components/caption';
import SearchInput from './components/searchInput';
import { Actions } from './components/actions';

const data = require('./data.json');

const Div = styled.div`
	width: 93%;
	padding: 20px 5% 5% 2%;
	@media (max-width: 768px) {
		width: 94%;
		padding: 3%;
	}
`;
class Users extends Component {
	componentDidMount() {
		const rows = this.getRow();
		document.getElementById('usersCount').innerHTML = this.usersCount;
		if (rows.length <= 5) {
			this.renderRows(rows);
		} else {
			this.renderRows(rows.slice(0, 10));
		}
	}
	constructor(props) {
		super(props);
		this.usersCount = 0;
		this.users = [];
		this.page = 0;
		this.renderNewPage = (event) => {
			let btn = event.target;
			if (btn.tagName === 'I') {
				btn = btn.parentElement;
			}
			const id = btn.id;
			const lastPage = this.users % 10 ? 0 : 1;
			const pageCount = (Math.floor(this.users.length / 10) - 1) + lastPage;
			if (id === 'doubleLeft') {
				if (this.page === 0) {
					return;
				} else {
					this.page = 0;
					this.renderRows(this.users.slice(0, 10));
				}
			} else if (id === 'left') {
				if (this.page === 0) {
					return;
				} else {
					this.page = this.page - 1;
					this.renderRows(this.users.slice(this.page * 10, (this.page * 10) + 10));
				}
			} else if (id === 'right') {
				if (this.page === pageCount) {
					return;
				} else {
					this.page = this.page + 1;
					this.renderRows(this.users.slice(this.page * 10, (this.page * 10) + 10));
				}
			} else if (id === 'doubleRight') {
				if (this.page === pageCount) {
					return;
				} else {
					this.page = pageCount;
					this.renderRows(this.users.slice(this.page * 10));
				}
			}
		};
		this.renderRows = (arr) => {
			document.getElementById('table').innerHTML = arr.join('');
			const actionsBox = Array.from(document.getElementsByClassName('actionsBox'));
			actionsBox.forEach((item) => {
				ReactDOM.render(
					<Actions />,
					item,
				);
			});
		};
		this.getRow = () => {
			const rows = [];
			for (const key in data) {
				const row = { name: key,
					data: '<ul class="row"><li class="cell">' + data[key].name + '</li><li class="cell">' + data[key].status + '</li><li class="cell">' + data[key].registered + '</li><li class="cell">' + data[key].polls + '</li><li class="cell actionsBox"></li></ul>' };
				rows.push(row);
			}
			rows.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
			});
			this.usersCount = rows.length;
			const newRows = rows.map(item => item.data);
			this.users = newRows;
			return newRows;
		};
	}
	render() {
		return (
			<Div>
				<div className="captionBox">
					<Caption cap>Users</Caption>
					<label className="searchLabel"><SearchInput type="search" placeholder="search..." /><i className="fa fa-search searchButton" aria-hidden="true" /></label>
				</div>
				<section className="userList">
					<ul className="row colorRow">
						<li className="cell">Name</li>
						<li className="cell">Role</li>
						<li className="cell">Registered</li>
						<li className="cell">Polls</li>
						<li className="cell">Actions</li>
					</ul>
					<div id="table" className="table"/>
					<ul className="row colorRow">
						<li className="usersCount">Users count: <span id="usersCount">0</span></li>
						<li className="usersNav">
							<button className="usersNavButton" id="doubleLeft" onClick={this.renderNewPage}><i className="fa fa-angle-double-left" aria-hidden="true" /></button>
							<button className="usersNavButton" id="left" onClick={this.renderNewPage}><i className="fa fa-angle-left" aria-hidden="true" /></button>
							<button className="usersNavButton" id="right" onClick={this.renderNewPage}><i className="fa fa-angle-right" aria-hidden="true" /></button>
							<button className="usersNavButton" id="doubleRight" onClick={this.renderNewPage}><i className="fa fa-angle-double-right" aria-hidden="true" /></button>
						</li>
					</ul>
				</section>
			</Div>
		);
	}
}
export default Users;
