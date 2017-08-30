export default function(state = {}, action) {
    switch (action.type) {
        case "setUser":
            return { user: action.user };

        case "addMessage":
            return { message: action.message };

            /* case "getData":
            return {
                login: true,
                users: JSON.parse(localStorage.getItem("users")),
                user: JSON.parse(localStorage.getItem("user")) || "",
                polls: JSON.parse(localStorage.getItem("polls")) || "",
                userPolls: JSON.parse(localStorage.getItem("userPolls")) || "",
            };

        case "login":
            let userPos = null;

            state.users.forEach((item, i) => {
                if (item.id === action.user.id) {
                    userPos = i;
                }
            });
            localStorage.setItem("pos", state.users[userPos]);
            localStorage.setItem("user", JSON.stringify(action.user));

            return {
                login: true,
                users: state.users,
                user: action.user,
                polls: state.polls,
                userPolls: state.userPolls || [],
            };

        case "showProfile":
            const usersData = state.users;
            let pos = null;

            usersData.forEach((item, i) => {
                if (item.id === action.target) {
                    pos = i;
                }
            });

            return {
                login: state.login || true,
                user: state.user,
                users: state.users,
                showProf: action.target === "my" ? action.target : pos,
                polls: state.polls,
                userPolls: state.userPolls || [],
            };

        case "deleteUser":
            const users = JSON.parse(localStorage.getItem("users"));
            let position = null;

            users.forEach((item, i) => {
                if (item.id === action.id) {
                    position = i;
                }
            });
            users.splice(position, 1);
            localStorage.removeItem("users");
            localStorage.setItem("users", JSON.stringify(users));

            return {
                login: state.login || true,
                user: state.user || JSON.parse(localStorage.getItem("users"))[localStorage.getItem("lp").split("-")[2] - 1],
                users,
                showProf: null,
                polls: state.polls,
            };

        case "addPolls":
            localStorage.setItem("polls", JSON.stringify(action.polls));

            return {
                user: state.user || [],
                users: state.users,
                polls: action.polls,
            };

        case "showPoll":
            return {
                login: state.login || true,
                user: state.user,
                users: state.users,
                showProf: "",
                polls: state.polls,
                showPoll: action.target,
            }; */

        default:
            return state;
    }
}
