export default function (state = {}, action) {
	switch (action.type) {
	case 'setData':
		let userPolls = [];
		const pollsList = action.user.polls;
		const polls = action.polls;
		polls.forEach((poll) => {
			pollsList.forEach((item) => {
				if (poll.id == item) {
					userPolls.push(poll);
				}
			});
		});
		localStorage.setItem('userPolls', JSON.stringify(userPolls));
		return {
			login: true,
			users: action.users,
			user: action.user,
			polls: action.polls,
			userPolls,
		};
	case 'login':
		let userPos = null;
		state.users.forEach((item, i) => {
			if (item.id === action.id) {
				userPos = i;
			}
		});
		localStorage.setItem('id', `${action.id}-${userPos}`);
		return {
			login: true,
			users: state.users,
			user: state.users[userPos],
			polls: state.polls,
		};
	case 'addUsers':
		localStorage.setItem('users', JSON.stringify(action.users));
		return {
			login: state.login || true,
			users: action.users,
			user: state.user || localStorage.length === 3 ?
				JSON.parse(localStorage.getItem('users'))[localStorage.getItem('id').split('-')[1]] :
				'',
			polls: state.polls ? state.polls : '',
		};
	case 'showProfile':
		const usersData = state.users || JSON.parse(localStorage.getItem('users'));
		let pos = null;
		usersData.forEach((item, i) => {
			if (item.id === action.target) {
				pos = i;
			}
		});
		return {
			login: state.login || true,
			user: state.user || JSON.parse(localStorage.getItem('users'))[pos],
			users: state.users || JSON.parse(localStorage.getItem('users')),
			showProf: action.target === 'my' ? action.target : pos,
			polls: state.polls,
		};
	case 'deleteUser':
		const users = JSON.parse(localStorage.getItem('users'));
		let position = null;
		users.forEach((item, i) => {
			if (item.id === action.id) {
				position = i;
			}
		});
		users.splice(position, 1);
		localStorage.removeItem('users');
		localStorage.setItem('users', JSON.stringify(users));
		return {
			login: state.login || true,
			user: state.user || JSON.parse(localStorage.getItem('users'))[localStorage.getItem('lp').split('-')[2] - 1],
			users,
			showProf: null,
			polls: state.polls,
		};
	case 'addPolls':
		localStorage.setItem('polls', JSON.stringify(action.polls));
		return {
			user: state.user,
			users: state.users,
			polls: action.polls,
		};
	case 'showPoll':
		return {
			login: state.login || true,
			user: state.user,
			users: state.users,
			showProf: '',
			polls: state.polls,
			showPoll: action.target,
		};
	default:
		return state;
	}
}
