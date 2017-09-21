import React, { Component } from "react";
import { Route } from "react-router-dom";
import propTypes from "prop-types";

import MainHeader from "./commonComponents/mainHeader";
import UserList from "./componentsForUsers/userList";
import UserInfo from "./componentsForUsers/userInfo";
import Navigation from "./commonComponents/navigation";
import MainContainer from "./commonComponents/mainContainer";


class Users extends Component {
    render() {
        return (
            <div className="box">
                <MainHeader className="header" />
                <MainContainer main>
                    <Navigation />
                    <Route exact path="/users" component={UserList} />
                    <Route path="/users/userInfo" component={UserInfo} />
                </MainContainer>
            </div>
        );
    }
}

Users.propTypes = {
    history: propTypes.object,
};
export default Users;
