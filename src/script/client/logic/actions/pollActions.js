import axios from "axios";

export function showPollAction(target) {
    return dispatch => {
        dispatch({
            type: "showProfile",
            id: target.id || target,
        });
    };
}

export function deletePollAction(id) {
    return dispatch => {
        return axios.get("https://5981a9d2139db000114a2d9c.mockapi.io/polls").then((polls) => {
            const pollId = polls.data.filter(item => item.user === id);

            if (pollId.length !== 0) {
                return axios.delete(`https://5981a9d2139db000114a2d9c.mockapi.io/polls/${pollId[0].id}`);
            }
        }).then(() => {
            return axios.get("https://5981a9d2139db000114a2d9c.mockapi.io/polls");
        }).then((polls) => {
            return dispatch({
                type: "addPolls",
                polls: polls.data,
            });
        });
    };
}

export function savePollAction(pollData) {
    return dispatch => {
        return axios.post("https://5981a9d2139db000114a2d9c.mockapi.io/polls", pollData)
            .then(() => {
                return axios.get("https://5981a9d2139db000114a2d9c.mockapi.io/polls");
            }).then((polls) => {
                dispatch({
                    type: "addPolls",
                    polls: polls.data,
                });
            });
    };
}
