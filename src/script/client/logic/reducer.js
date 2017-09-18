const initialState = {
    users: [],
    user: {},
    message: "",
    email: "",
    target: "",
    polls: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case "setUser":
            return Object.assign({}, state, { user: action.user });

        case "addMessage":
            return Object.assign({}, state, { message: action.message });

        case "setEmailForResettingPassword":
            return Object.assign({}, state, { email: action.email });

        case "showProfile":
            return Object.assign({}, state, { target: action.target });

        case "addUsers":
            return Object.assign({}, state, { users: action.users });

        case "addPolls":
            return Object.assign({}, state, { polls: action.polls });

        case "deleteUser":
            state.users.filter(item => item.id !== action.id);

            return Object.assign({}, state);

        default:
            return state;
    }
}
