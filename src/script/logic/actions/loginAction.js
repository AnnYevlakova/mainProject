import axios from "axios";
import jwt from "jsonwebtoken";

const config = {
    jwtSecret: "somesecretkeyforjsonwebtoken",
};

export default function(userData) {
    return dispatch => {
        const { login, password } = userData;

        return axios.get("https://5981a9d2139db000114a2d9c.mockapi.io/users").then((users) => {
            const user = users.data.filter(item => item.username === login);

            if (user[0]) {
                if (user[0].password === password) {
                    const token = jwt.sign({ user: user[0] }, config.jwtSecret);
                    localStorage.setItem("jwtToken", token);
                    dispatch({
                        type: "setUser",
                        user: user[0],
                    });
                } else {
                    return { errors: { password: "Invalid credentials" } };
                }
            } else {
                return { errors: { login: "Invalid credentials" } };
            }
        });
    };
}
