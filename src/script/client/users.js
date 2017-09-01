import React, { Component } from "react";
import { Route } from "react-router-dom";
import propTypes from "prop-types";

import img from "file-loader!../../img/logo.png";

import UserList from "./componentsForUsers/userList";
import UserInfo from "./componentsForUsers/userInfo";
import DefaultLink from "./commonComponents/defaultLink";
import Navigation from "./commonComponents/navigation";
import MenuDropdown from "./commonComponents/menuDropdown";
import MainContainer from "./commonComponents/mainContainer";


class Users extends Component {
    render() {
        return (
            <div className="box">
                <header className="header">
                    <img className="logo" src={img} alt=""/>
                    <nav className="headerNav">
                        <DefaultLink header className="link" href="https://www.itechart.com/" target="_blank">about us</DefaultLink>
                        <MenuDropdown/>
                    </nav>
                </header>
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
