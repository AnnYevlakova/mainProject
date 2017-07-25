import React from 'react';

export function reducer(store, action) {
	switch (action.type) {
		case 'login':
			console.log('logged in');
			return {
				state: 'login'
			};
		case 'logout':
			console.log('logged out');
			return {
				state: 'logout'
			};
	}
}