import axios from "axios";

export default function(userData) {
    return () => {
        const { username, email, pas1, status } = userData;

        return isUserExists({ email, username }).then((errors) => {
            const dateNow = new Date();
            const registered = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`;

            if (errors.email || errors.username) {
                return { errors };
            }

            return axios.post("https://5981a9d2139db000114a2d9c.mockapi.io/users/",
                {
                    username,
                    email,
                    password: pas1,
                    registered,
                    status,
                });
        });
    };
}

function isUserExists(identifier) {
    return axios.get("https://5981a9d2139db000114a2d9c.mockapi.io/users/").then((users) => {
        const errors = {};
        const email = users.data.filter(item => item.email === identifier.email);
        const username = users.data.filter(item => item.username === identifier.username);

        if (username.length !== 0) {
            errors.username = "User with such username exists.";
        }
        if (email.length !== 0) {
            errors.email = "User with such email exists.";
        }

        return errors;
    });
}
