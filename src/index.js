import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import jwt from "jsonwebtoken";

import store from "./script/client/logic/store";

import Login from "./script/client/login";
import Main from "./script/client/main";
import NewPoll from "./script/client/newPoll";
import MyPolls from "./script/client/myPolls";
import Users from "./script/client/users";
import Registration from "./script/client/registration";
import Poll from "./script/client/poll";
import SendEmail from "./script/client/sendEmail";
import ResetPassword from "./script/client/resetPassword";

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
                    <Route path="/sendEmail" component={SendEmail}/>
                    <Route path="/resetPassword" component={ResetPassword}/>
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
