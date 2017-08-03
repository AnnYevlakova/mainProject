import React, { Component } from 'react';
import store from '../store';
import MyLink from './myLink';
import { Ul, Li } from './row';
import ReactDOM from 'react-dom';

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
				if (window.location.pathname === '/users/userInfo') {
					ReactDOM.render(
						<Ul userInfo>
							<Li userInfo>{store.getState().user.name}</Li>
							<Li userInfo>{store.getState().user.email}</Li>
							<Li userInfo>{store.getState().user.registered}</Li>
							<Li userInfo>{store.getState().user.status}</Li>
							<Li userInfo>{store.getState().user.password}</Li>
						</Ul>,
						document.getElementById('userInfoBox'),
					);
				}
			} else {
				localStorage.clear();
				document.getElementById('mainContainer').style.alignItems = 'flex-start';
			}
		};

		this.openCloseMenuDropdown = (event) => {
			const btn = event.target;
			const items = Array.from(document.querySelectorAll('.menuDropdown li a'));
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
			<ul className="menuDropdown"><i className="fa fa-user" aria-hidden="true" /><button onClick={this.openCloseMenuDropdown} data-status="closed" className="arrow" id="arrow">&#9660;</button>
				<li><MyLink onClick={this.onClick} menuItem menuItem1 id="toTheMyProfile" to="/users/userInfo">my profile</MyLink></li>
				<li><MyLink onClick={this.onClick} menuItem menuItem2 id="logOut" to="/">Log out</MyLink></li>
			</ul>
		);
	}
}
