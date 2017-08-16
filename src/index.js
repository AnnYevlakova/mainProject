import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

import store from './script/logic/store';

import Login from './script/login';
import Main from './script/main';
import NewPoll from './script/newPoll';
import MyPolls from './script/myPolls';
import Users from './script/users';
import Registration from './script/registration';

require('style-loader!css-loader!less-loader!./style/main.less');

class App extends Component {
	componentWillMount() {
	    if (!localStorage.getItem('users')) {
            const users = axios.get('https://5981a9d2139db000114a2d9c.mockapi.io/users/');
            const polls = axios.get('https://5981a9d2139db000114a2d9c.mockapi.io/polls/');
            Promise.all([users, polls])
                .then((data) => {
                    data[0].data.sort((a, b) => {
                        if (a.name > b.name) return 1;
                        if (a.name < b.name) return -1;
                    });
                    store.dispatch({
                        type: 'setData',
                        users: data[0].data,
                        user: JSON.parse(localStorage.getItem('user')) || '',
                        polls: data[1].data,
                    });
                });
        } else {
            store.dispatch({
                type: 'getData',
            });
        }
	}

	render() {
		return (
			<Router>
				<div className="container">
					<Route exact path='/' component={Login}/>
					<Route path='/registration' component={Registration}/>
					<Route path='/main' component={Main} />
					<Route path='/users' component={Users} />
					<Route path='/newPoll' component={NewPoll} />
					<Route path='/myPolls' component={MyPolls} />
					<Route path='/poll' component={MyPolls} />
					<footer className="footer">
						<p>Copyright @ 2017 iTechArt</p>
					</footer>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app'),
);

module.hot.accept();
