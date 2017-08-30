import React, { Component } from "react";
import { Route } from "react-router-dom";
import propTypes from "prop-types";

import { PollsList } from "./componentsForMyPoll/pollsList";
/* import { PollInfo } from './componentsForMyPollpollInfo';*/
import DefaultLink from "./commonComponents/defaultLink";
import Navigation from "./commonComponents/navigation";
import MenuDropdown from "./commonComponents/menuDropdown";
import MainContainer from "./commonComponents/mainContainer";

import img from "file-loader!../img/logo.png";

class MyPolls extends Component {
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
                <MainContainer user>
                    <Navigation />
                    <Route exact path="/myPolls" component={PollsList} />
                    {/* <Route path='/myPolls/pollInfo' component={PollInfo} />*/}
                </MainContainer>
            </div>
        );
    }
}

MyPolls.propTypes = {
    history: propTypes.object,
};
export default MyPolls;
