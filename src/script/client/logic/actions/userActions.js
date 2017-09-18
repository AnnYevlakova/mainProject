import axios from "axios";

export function showUserAction(target) {
    return dispatch => {
        dispatch({
            type: "showProfile",
            target: target.id || target,
        });
    };
}

export function deleteUserAction(id) {
    return dispatch => {
        return axios.delete(`https://5981a9d2139db000114a2d9c.mockapi.io/users/${id}`).then(() => {
            return axios.get("https://5981a9d2139db000114a2d9c.mockapi.io/users");
        }).then((users) => {
            return dispatch({
                type: "addUsers",
                users: users.data,
            });
        });
    };
}

export function resetUserDataAction(userData) {
    return dispatch => {
        return axios.put(`https://5981a9d2139db000114a2d9c.mockapi.io/users/${userData.id}`, userData).then(() => {
            return axios.get("https://5981a9d2139db000114a2d9c.mockapi.io/users");
        }).then((users) => {
            return dispatch({
                type: "addUsers",
                users: users.data,
            });
        });
    };
}
