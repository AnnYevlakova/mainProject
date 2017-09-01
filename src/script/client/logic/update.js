import axios from "axios";
import store from "../logic/store";

export default function() {
    const users = axios.get("https://5981a9d2139db000114a2d9c.mockapi.io/users/");
    const polls = axios.get("https://5981a9d2139db000114a2d9c.mockapi.io/polls/");

    Promise.all([users, polls])
        .then((data) => {
            data[0].data.sort((a, b) => {
                if (a.name > b.name) { return 1; }
                if (a.name < b.name) { return -1; }
            });
            store.dispatch({
                type: "setData",
                users: data[0].data,
                user: data[0].data[JSON.parse(localStorage.getItem("pos"))] || "",
                polls: data[1].data,
            });
        });
}
