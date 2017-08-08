import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import store from '../store';
import { Ul, Li } from './row';
import Btn from './btn';


export class Actions extends Component {
	constructor(props) {
		super(props);
		this.delete = (event) => {
			const target = event.target.closest('ul');
			const id = target.id;
			axios.delete(`https://5981a9d2139db000114a2d9c.mockapi.io/users/${id}`)
			target.remove();
			store.dispatch({ type: 'deleteUser', id });
			ReactDOM.render(
				<div>
					{store.getState().users.slice(0, 10).map((item, i) => <Ul key={i} id={item.id}>
						<Li onClick={this.showModal}>{item.name}</Li>
						<Li>{item.status}</Li>
						<Li>{item.registered}</Li>
						<Li>{item.polls}</Li>
						<Li><Actions showModal={this.props.showModal}/></Li>
					</Ul>)}
				</div>,
				document.getElementById('table'),
			);
		};
		this.edit = this.props.showModal;
	}
	render() {
		const status = store.getState().user ?
			store.getState().user.status :
			JSON.parse(localStorage.getItem('users'))[localStorage.getItem('id').split('-')[1]].status;
		return (
			status === 'admin' ?
				<div>
					<Btn onClick={this.edit}><i className="fa fa-pencil-square" aria-hidden="true" /></Btn>
					<Btn onClick={this.delete}><i className="fa fa-trash" aria-hidden="true" /></Btn>
				</div> :
				<Btn onClick={this.edit}><i className="fa fa-chevron-circle-right" aria-hidden="true" /></Btn>
		);
	}
}
