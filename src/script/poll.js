import React, { Component } from "react";
import axios from "axios";

import store from "./logic/store";
import img from "file-loader!../img/logo.png";


import Caption from "./commonComponents/caption";
import Container from "./commonComponents/container";
import DefaultLink from "./commonComponents/defaultLink";
import Navigation from "./commonComponents/navigation";
import MenuDropdown from "./commonComponents/menuDropdown";
import MainContainer from "./commonComponents/mainContainer";
import ReactDOM from "react-dom";

import QWithOneA from "./componentsForNewPoll/questions/QWithOneA";
import QWithSeveralA from "./componentsForNewPoll/questions/QWithSeveralA";
import QText from "./componentsForNewPoll/questions/QText";
import QFile from "./componentsForNewPoll/questions/QFile";
import QRating from "./componentsForNewPoll/questions/QRating";
import QScale from "./componentsForNewPoll/questions/QScale";

class Poll extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {} };
    }

    componentDidMount() {
        axios.get(`https://5981a9d2139db000114a2d9c.mockapi.io/polls/${store.getState().showPoll}`)
            .then((pollData) => {
                this.setState({ data: pollData.data });
                ReactDOM.render(
                    <div>
                        {this.state.data.pollData.map((item, i) => {
                            if (item.type === "QWithOneA") {
                                return <QWithOneA key={i} required={this.required} data={item} number={i + 1}/>;
                            }
                            if (item.type === "QWithSeveralA") {
                                return <QWithSeveralA key={i} required={this.required} data={item} number={i + 1}/>;
                            }
                            if (item.type === "QText") {
                                return <QText key={i} required={this.required} data={item} number={i + 1}/>;
                            }
                            if (item.type === "QFile") {
                                return <QFile key={i} required={this.required} data={item} number={i + 1}/>;
                            }
                            if (item.type === "QRating") {
                                return <QRating key={i} required={this.required} data={item} number={i + 1}/>;
                            }
                            if (item.type === "QScale") {
                                return <QScale key={i} required={this.required} data={item} number={i + 1}/>;
                            }
                        })}
                    </div>,
                    document.getElementById("poll"),
                );
            });
    }

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
                    <Container flex>
                        <Container item>
                            <Caption>{this.state.data.name}</Caption>
                            <div id="poll" />
                        </Container>
                    </Container>
                </MainContainer>
            </div>
        );
    }
}
export default Poll;
