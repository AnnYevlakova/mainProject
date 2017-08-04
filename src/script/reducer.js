export default function (state = {}, action) {
	switch (action.type) {
	case 'login':
		localStorage.setItem('users', JSON.stringify(state.users));
		localStorage.setItem('lp', `${state.users[action.id - 1].name}-${state.users[action.id - 1].password}-${action.id}`);
		return {
			login: true,
			users: state.users,
			user: state.users[action.id - 1],
		};
	case 'addUsers':
		localStorage.setItem('users', JSON.stringify(action.users));
		return {
			login: state.login || true,
			users: action.users,
		};
	case 'showProfile':
		return {
			login: state.login || true,
			user: state.user || JSON.parse(localStorage.getItem('users'))[localStorage.getItem('lp').split('-')[2]-1],
			users: state.users || JSON.parse(localStorage.getItem('users')),
			showProf: action.target,
		};
	default:
		return state;
	}
}
