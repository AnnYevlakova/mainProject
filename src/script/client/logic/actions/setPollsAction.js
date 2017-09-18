import axios from "axios";

export default function() {
    return dispatch => {
        return axios.get("https://5981a9d2139db000114a2d9c.mockapi.io/polls/").then((polls) => {
            dispatch({
                type: "addPolls",
                polls: polls.data,
            });
        });
    };
}
