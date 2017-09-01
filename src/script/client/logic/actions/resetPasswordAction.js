import axios from "axios";

export function sendEmailAction(email) {
    return (dispatch) => {
        return axios.get("https://5981a9d2139db000114a2d9c.mockapi.io/users").then((users) => {
            const user = users.data.filter((item) => item.email === email);

            if (user[0]) {
                localStorage.setItem("email", email);
                dispatch({ type: "setEmailForResettingPassword", email });
            }

            return user;
        });
    };
}

export function resetPasswordAction(email, password) {
    return () => {
        return axios.get("https://5981a9d2139db000114a2d9c.mockapi.io/users").then((users) => {
            const user = users.data.filter((item) => item.email === email)[0];

            if (user.password === password) {
                return { errors: { email: "New password and old password must be different" } };
            }
            const newUser = {
                id: user.id,
                email,
                password,
                registered: user.registered,
                username: user.username,
                status: user.status,
            };

            return axios.put(`https://5981a9d2139db000114a2d9c.mockapi.io/users/${user.id}`, newUser);
        }).then((data) => {
            if (data.status) {
                return data.status;
            } else {
                return data;
            }
        });
    };
}
