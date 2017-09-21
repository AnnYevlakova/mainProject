import React, { Component } from "react";
import { Route } from "react-router-dom";
import propTypes from "prop-types";

import PollsList from "./componentsForUserPoll/pollsList";
import MainHeader from "./commonComponents/mainHeader";
/* import { PollInfo } from './componentsForMyPollInfo';*/
import Navigation from "./commonComponents/navigation";
import MainContainer from "./commonComponents/mainContainer";

class UserPolls extends Component {
    render() {
        return (
            <div className="box">
                <MainHeader className="header" />
                <MainContainer user>
                    <Navigation />
                    <Route exact path="/userPolls" component={PollsList} />
                    {/* <Route path='/myPolls/pollInfo' component={PollInfo} />*/}
                </MainContainer>
            </div>
        );
    }
}

UserPolls.propTypes = {
    history: propTypes.object,
};
export default UserPolls;
