import React, { Component } from "react";
import propTypes from "prop-types";

import store from "./logic/store";
import img from "file-loader!../img/logo.png";

import {
    isRequired, isWithProcessBar, renderQ, editQ, deleteQ, addQ, saveQ, savePoll,
    cancelPoll
} from "./componentsForNewPoll/newPollControll";

import MainButton from "./commonComponents/mainButton";
import Caption from "./commonComponents/caption";
import Btn from "./commonComponents/btn";
import Container from "./commonComponents/container";
import DefaultField from "./commonComponents/defaultField";
import DefaultLink from "./commonComponents/defaultLink";
import Navigation from "./commonComponents/navigation";
import InputContainer from "./commonComponents/inputContainer";
import MenuDropdown from "./commonComponents/menuDropdown";
import MainContainer from "./commonComponents/mainContainer";

import QuestionBox from "./componentsForNewPoll/questionBox";


class NewPoll extends Component {
    constructor(props) {
        super(props);
        this.questions = [];
        this.questionsData = [];
        this.polls = store.getState().userPolls || JSON.parse(localStorage.getItem("userPolls"));
        this.questionsCount = 0;
        this.required = false;
        this.processBar = false;

        this.isRequired = isRequired.bind(this);
        this.isWithProcessBar = isWithProcessBar.bind(this);
        this.renderQ = renderQ.bind(this);
        this.editQ = editQ.bind(this);
        this.deleteQ = deleteQ.bind(this);
        this.addQ = addQ.bind(this);
        this.saveQ = saveQ.bind(this);
        this.cancelPoll = cancelPoll.bind(this);
        this.savePoll = savePoll.bind(this);
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
                            <InputContainer>Poll Name:
                                <DefaultField type="text" id="pollName" placeholder={`Poll #${this.polls.length + 1}`}/>
                            </InputContainer>
                            <p>questions count: <span id="qCount">{this.questionsCount}</span></p>
                            <MainButton id="save" onClick={this.savePoll} inline type="button" value="Save"/>
                            <MainButton id="saveAsTempl" onClick={this.saveAsTemplate} inline type="button" value="Save as Template"/>
                            <MainButton id="cancel" onClick={this.cancelPoll} type="button" inline value="Cancel"/>
                            <Container pollContainer id="pollsContainer">
                                <QuestionBox>Choose type of new question</QuestionBox>
                            </Container>
                        </Container>
                        <Container item2>
                            <section className="block">
                                <Caption>Question Type</Caption>
                                <Btn block onClick={this.addQ} id="QWithOneATempl">
                                    <i className="fa fa-list" aria-hidden="true" />
									Question with one answer</Btn>
                                <Btn block onClick={this.addQ} id="QWithSeveralATempl">
                                    <i className="fa fa-list-ol" aria-hidden="true" />
									Question with several answers</Btn>
                                <Btn block onClick={this.addQ} id="QTextTempl">
                                    <i className="fa fa-font" aria-hidden="true" />
									Text</Btn>
                                <Btn block onClick={this.addQ} id="QFileTempl">
                                    <i className="fa fa-file" aria-hidden="true" />
									File</Btn>
                                <Btn block onClick={this.addQ} id="QRatingTempl">
                                    <i className="fa fa-star-o" aria-hidden="true" />
									Rating</Btn>
                                <Btn block onClick={this.addQ} id="QScaleTempl">
                                    <i className="fa fa-battery-half" aria-hidden="true" />
									Scale</Btn>
                            </section>
                            <section className="block">
                                <Caption>Poll Options</Caption>
                                <InputContainer block>
                                    <DefaultField onChange={this.isRequired} block type="checkbox"/>
									Mark required fields
                                </InputContainer>
                                <InputContainer block>
                                    <DefaultField block type="checkbox" onChange={this.isWithProcessBar}/>
									Process bar
                                </InputContainer>
                            </section>
                        </Container>
                    </Container>
                </MainContainer>
            </div>
        );
    }
}

NewPoll.propTypes = {
    history: propTypes.object,
};
export default NewPoll;
