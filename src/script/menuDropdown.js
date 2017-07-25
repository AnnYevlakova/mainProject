import React, { Component } from 'react';
import MyLink from './components/myLink';

export class MenuDropdown extends Component {
	constructor(props) {
		super(props);
		this.onClick = () => {
			document.getElementById('mainContainer').style.alignItems = 'flex-start';
		}
		this.openCloseMenuDropdown = (event) => {
			const btn = event.target;
			if (btn.dataset.status === 'closed') {
				document.getElementById('logOut').style.display = 'block';
				btn.innerHTML = '&#9650;';
				btn.dataset.status = 'opened';
			} else {
				document.getElementById('logOut').style.display = 'none';
				btn.innerHTML = '&#9660;';
				btn.dataset.status = 'closed';
			}
		}
	}
	render() {
		return (
			<ul className="menuDropdown">Hi, {this.props.status}<button onClick={this.openCloseMenuDropdown} data-status="closed" className="arrow" id="arrow">&#9660;</button>
				<li><MyLink onClick={this.props.logout} class="logOut" id="logOut" to="/">Log out</MyLink></li>
			</ul>
		)
	}
}
