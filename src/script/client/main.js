import React, { Component } from "react";
import styled from "styled-components";
import propTypes from "prop-types";

import Navigation from "./commonComponents/navigation";
import MainHeader from "./commonComponents/mainHeader";
import MainBox from "./componentsForMain/mainBox";
import MainContainer from "./commonComponents/mainContainer";

const UserBox = styled.div`
		display: flex;
		flex: 1 1 auto;
		align-items: stretch;
		width: 100%;
		@media (max-width: 768px) {
			flex-direction: column;
		}
`;
const MainDiv = styled.main`
		flex: 1 1 auto;
		max-width: 90%;
		height: 100%;
		@media (max-width: 768px) {
				max-width: 100%;
		}
`;

class Main extends Component {
    render() {
        return (
            <div className="box">
                <MainHeader className="header" />
                <MainContainer user>
                    <UserBox>
                        <Navigation />
                        <MainDiv>
                            <MainBox/>
                        </MainDiv>
                    </UserBox>
                </MainContainer>
            </div>
        );
    }
}

Main.propTypes = {
    history: propTypes.object,
};
export default Main;
