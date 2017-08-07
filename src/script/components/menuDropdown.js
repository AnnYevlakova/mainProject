import React, { Component } from 'react';
import store from '../store';
import ReactDOM from 'react-dom';
import MyLink from './myLink';
import UserInfoForUser from './userInfoForUser';
import UserInfoForAdmin from './userInfoForAdmin';

export class MenuDropdown extends Component {
	constructor(props) {
		super(props);

		this.onClick = (event) => {
			const target = event.target;
			if (target.id === 'toTheMyProfile') {
				store.dispatch({
					type: 'showProfile',
					target: 'my',
				});
				if (window.location.pathname === '/users/userInfo' && store.getState().user.status === 'user') {
					ReactDOM.render(
						<UserInfoForUser store={store}/>,
						document.getElementById('userInfoBox'),
					);
				} else if (window.location.pathname === '/users/userInfo' && store.getState().user.status === 'admin') {
					ReactDOM.render(
						<UserInfoForAdmin data={store.getState().user}/>,
						document.getElementById('userInfoBox'),
					);
				}
			} else {
				localStorage.clear();
				document.getElementById('mainContainer').style.alignItems = 'flex-start';
			}
		};

		this.openCloseMenuDropdown = (event) => {
			let btn = event.target;
			if (btn.classList.contains('fa')) {
				btn = document.getElementById('arrow');
			}
			const items = Array.from(document.querySelectorAll('.menuDropdown li'));
			if (btn.dataset.status === 'closed') {
				items.forEach((item) => {
					item.style.display = 'block';
				});
				btn.dataset.status = 'opened';
				btn.innerHTML = '&#9650;';
			} else {
				items.forEach((item) => {
					item.style.display = 'none';
				});
				btn.innerHTML = '&#9660;';
				btn.dataset.status = 'closed';
			}
		};
	}
	render() {
		return (
			<ul className="menuDropdown">
				<i onClick={this.openCloseMenuDropdown} className="fa fa-user" aria-hidden="true" />
				<button onClick={this.openCloseMenuDropdown} data-status="closed" className="arrow" id="arrow">&#9660;</button>
				<li className="menuItem menuItem1">
					<MyLink onClick={this.onClick} id="toTheMyProfile" to="/users/userInfo">my profile</MyLink>
				</li>
				<li className="menuItem menuItem2">
					<MyLink onClick={this.onClick} id="logOut" to="/">Log out</MyLink>
				</li>
			</ul>
		);
	}
}
