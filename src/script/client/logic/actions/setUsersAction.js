import axios from "axios";

export default function() {
    return dispatch => {
        return axios.get("https://5981a9d2139db000114a2d9c.mockapi.io/users/").then((users) => {
            dispatch({
                type: "addUsers",
                users: users.data,
            });
        });
    };
}
