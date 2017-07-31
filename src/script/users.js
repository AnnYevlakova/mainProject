import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Caption from './components/caption';
import SearchInput from './components/searchInput';
import MainButton from './components/mainButton';
import { Actions } from './components/actions';
import Link from './components/link';
import Nav from './components/nav';
import { Ul, Li } from './components/row';
import { MenuDropdown } from './components/menuDropdown';
import MainContainer from './components/mainContainer';
import img from 'file-loader!../img/logo.png';

const dataObj = require('./data.json');
const data = [];

for (let key in dataObj) {
	data.push([key, dataObj[key].email, dataObj[key].status, dataObj[key].registered, dataObj[key].polls, dataObj[key].actions]);
}
data.sort((a, b) => {
	if (a[0] > b[0]) return 1;
	if (a[0] < b[0]) return -1;
});

const Div = styled.div`
	width: 93%;
	padding: 20px 5% 5% 2%;
	@media (max-width: 768px) {
		width: 94%;
		padding: 3%;
	}
`;
class Users extends Component {
	constructor(props) {
		super(props);
		this.usersCount = data.length;
		this.page = 0;

		this.directTo = (event) => {
			const direct = event.target.id;
			this.props.history.push(`/${direct}`);
		};

		this.renderNewPage = (event) => {
			let btn = event.target;
			if (btn.tagName === 'I') {
				btn = btn.parentElement;
			}
			const id = btn.id;
			const lastPage = this.usersCount % 10 ? 1 : 0;
			const pageCount = (Math.floor(this.usersCount / 10) - 1) + lastPage;
			if (id === 'doubleLeft') {
				if (this.page === 0) {
					return;
				} else {
					this.page = 0;
					ReactDOM.render(
						<div>
							{data.slice(0, 10).map((item, i) => <Ul key={i} id={item[0]}><Li>{item[0]}</Li><Li>{item[2]}</Li><Li>{item[3]}</Li><Li>{item[4]}</Li><Li><Actions/></Li></Ul>)}
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
							{data.slice(this.page * 10, (this.page * 10) + 10).map((item, i) => <Ul key={i} id={item[0]}><Li>{item[0]}</Li><Li>{item[2]}</Li><Li>{item[3]}</Li><Li>{item[4]}</Li><Li><Actions/></Li></Ul>)}
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
							{data.slice(this.page * 10, (this.page * 10) + 10).map((item, i) => <Ul key={i} id={item[0]}><Li>{item[0]}</Li><Li>{item[2]}</Li><Li>{item[3]}</Li><Li>{item[4]}</Li><Li><Actions/></Li></Ul>)}
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
							{data.slice(this.page * 10).map((item, i) => <Ul key={i} id={item[0]}><Li>{item[0]}</Li><Li>{item[2]}</Li><Li>{item[3]}</Li><Li>{item[4]}</Li><Li><Actions/></Li></Ul>)}
						</div>,
						document.getElementById('table'),
					);
				}
			}
		};

		/*this.showModal = (event) => {
			let target = event.target;
			if (target.classList.contains(('cell'))) {
				target = target.parentElement;
			}

		}*/
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
				<MainContainer user>
					<Nav>
						<MainButton id="main" onClick={this.directTo} nav type="button" value="Main"/>
						<MainButton id="newPoll" onClick={this.directTo} nav type="button" value="New poll"/>
						<MainButton id="myPolls" onClick={this.directTo} nav type="button" value="My polls"/>
						<MainButton id="pollTemplates" onClick={this.directTo} nav type="button" value="Poll templates"/>
						<MainButton id="users" onClick={this.directTo} nav type="button" value="Users"/>
					</Nav>
					<Div>
						<div className="captionBox">
							<Caption cap>Users</Caption>
							<label className="searchLabel"><SearchInput type="search" placeholder="search..." /><i className="fa fa-search searchButton" aria-hidden="true" /></label>
						</div>
						<section className="userList">
							<Ul colorRow>
								<Li>Name</Li>
								<Li>Role</Li>
								<Li>Registered</Li>
								<Li>Polls</Li>
								<Li>Actions</Li>
							</Ul>
							<div id="table" className="table">
								{data.slice(0, 10).map((item, i) => <Ul key={i} id={item[0]}><Li>{item[0]}</Li><Li>{item[2]}</Li><Li>{item[3]}</Li><Li>{item[4]}</Li><Li><Actions/></Li></Ul>)}
							</div>
							<Ul colorRow>
								<Li className="usersCount">Users count: <span id="usersCount">{this.usersCount}</span></Li>
								<Li className="usersNav">
									<button className="usersNavButton" id="doubleLeft" onClick={this.renderNewPage}><i className="fa fa-angle-double-left" aria-hidden="true" /></button>
									<button className="usersNavButton" id="left" onClick={this.renderNewPage}><i className="fa fa-angle-left" aria-hidden="true" /></button>
									<button className="usersNavButton" id="right" onClick={this.renderNewPage}><i className="fa fa-angle-right" aria-hidden="true" /></button>
									<button className="usersNavButton" id="doubleRight" onClick={this.renderNewPage}><i className="fa fa-angle-double-right" aria-hidden="true" /></button>
								</Li>
							</Ul>
						</section>
					</Div>
				</MainContainer>
			</div>
		);
	}
}
export default Users;
