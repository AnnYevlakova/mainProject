import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
/*import Caption from './components/caption';
import MyLink from './components/myLink';
import Link from './components/link';
import Education from './education'
import { Route } from 'react-router-dom';
import img1 from 'file-loader!../img/img1.jpg';
import img2 from 'file-loader!../img/img1-1.jpg';*/

export class UserInfo extends Component {
	constructor(props) {
		super(props);
		this.data = [];
	}
	componentDidMount() {
		axios.get('https://5981a9d2139db000114a2d9c.mockapi.io/users')
			.then((data) => {
				this.data = data.data;
				ReactDOM.render(
					<div>
						{this.data.map((item, i) => <ul key={i} id={item.id}><li>{item.name}</li><li>{item.email}</li><li>{item.registered}</li><li>{item.status}</li><li>{item.password}</li></ul>)}
					</div>,
					document.getElementById('userInfoBox'),
				);
				return data;
			});
	}
	render() {
		return (
			<ul id="userInfoBox" />
		);
	}
}
