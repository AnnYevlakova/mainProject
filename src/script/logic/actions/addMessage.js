export default function(message) {
    return dispatch => {
        dispatch({ type: "addMessage", message });
    };
}
