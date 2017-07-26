import React, { Component } from 'react';
import MyLink from './myLink';

export class MenuDropdown extends Component {
	constructor(props) {
		super(props);

		this.onClick = () => {
			document.getElementById('mainContainer').style.alignItems = 'flex-start';
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
				<li><MyLink onClick={this.onClick} menuItem menuItem1 id="logOut" to="/">Log out</MyLink></li>
			</ul>
		)
	}
}