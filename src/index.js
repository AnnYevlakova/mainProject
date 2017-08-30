import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import jwt from "jsonwebtoken";

import store from "./script/logic/store";

import Login from "./script/login";
import Main from "./script/main";
import NewPoll from "./script/newPoll";
import MyPolls from "./script/myPolls";
import Users from "./script/users";
import Registration from "./script/registration";
import Poll from "./script/poll";
import PasswordReset from "./script/passwordReset";

require("style-loader!css-loader!less-loader!./style/main.less");

class App extends Component {
    componentWillMount() {
        if (localStorage.jwtToken) {
            store.dispatch({ type: "setUser", user: (jwt.decode(localStorage.jwtToken).user) });
        }
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <Route exact path="/" component={Login}/>
                    <Route path="/registration" component={Registration}/>
                    <Route path="/passwordReset" component={PasswordReset}/>
                    <Route path="/main" component={Main} />
                    <Route path="/users" component={Users} />
                    <Route path="/newPoll" component={NewPoll} />
                    <Route path="/myPolls" component={MyPolls} />
                    <Route path="/poll" component={MyPolls} />
                    <Route path="/poll" component={Poll} />
                    <footer className="footer">
                        <p>Copyright @ 2017 iTechArt</p>
                    </footer>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app"),
);

module.hot.accept();
