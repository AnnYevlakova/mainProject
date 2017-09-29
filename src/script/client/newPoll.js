import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

import { savePollAction } from "./logic/actions/pollActions";

import MainHeader from "./commonComponents/mainHeader";
import MainButton from "./commonComponents/mainButton";
import Caption from "./commonComponents/caption";
import Btn from "./commonComponents/btn";
import Container from "./commonComponents/container";
import DefaultField from "./commonComponents/defaultField";
import Navigation from "./commonComponents/navigation";
import InputContainer from "./commonComponents/inputContainer";
import MainContainer from "./commonComponents/mainContainer";

import PollContainer from "./componentsForNewPoll/pollContainer";

class NewPoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            questionsData: [],
            polls: [],
            questionsCount: 0,
            required: false,
            processBar: false,
        };

        this.isNumeric = (number) => {
            return !isNaN(parseFloat(number)) && isFinite(number);
        };

        this.editQ = (event) => {
            const target = event.target.closest("div");
            const questions = this.state.questions;
            questions[target.id - 1] = `${target.getAttribute("data-type")}Templ`;
            this.setState({ questions });
        };

        this.deleteQ = (event) => {
            const target = event.target.closest("div");
            const questions = this.state.questions;
            questions.splice(target.id - 1, 1);
            let data = this.state.questionsData;
            data.splice(target.id - 1, 1);
            data = data.map((item, i) => {
                if (item.number !== i + 1) {
                    item.number = i + 1;
                }

                return item;
            });
            this.setState({
                questions,
                questionsData: data,
                questionsCount: this.state.questionsCount - 1,
            });
        };

        this.deleteQField = (event) => {
            const target = event.target.id ? event.target : event.target.parentElement;
            const questionsData = this.state.questionsData;

            const answers = questionsData[target.closest("div[data-type^='QWith']").id - 1].answers;
            answers.splice(target.id, 1);
            this.setState({ questionsData });
        };

        this.addQ = (event) => {
            const questions = this.state.questions;
            let target = event.target;

            if (target.tagName === "I") {
                target = target.parentElement;
            } else if (target.tagName === "abbr") {
                target = target.child;
            }

            questions.push(target.id);
            this.setState({
                questionsCount: this.state.questionsCount + 1,
                questions,
            });
        };

        this.saveQ = (event) => {
            const target = event.target.closest("div");
            let qData = {};
            const type = target.getAttribute("data-type").split("Tem")[0];
            const questions = this.state.questions;
            const data = this.state.questionsData;

            questions[target.id - 1] = type;

            if (target.getAttribute("data-type") === "QWithOneATempl" || target.getAttribute("data-type") === "QWithSeveralATempl") {
                let answers = Array.from(target.querySelectorAll("input[data-type='answer']"));

                if (!target.querySelector("textarea").value) {
                    target.querySelector("textarea").classList.add("wrong");
                }
                if (this.state.questionsData[target.id - 1]) {
                    const existingAnswers = this.state.questionsData[target.id - 1].answers;

                    answers = answers.filter((item, i) => {
                        if (item.value.trim() !== "") {
                            return item;
                        } else if (item.value === "" && existingAnswers[i]) {
                            return item;
                        }

                        return false;
                    });
                    answers = answers.map((item, i) => item.value || existingAnswers[i]);
                } else {
                    answers = answers.filter((item) => {
                        if (item.value.trim() !== "") {
                            return item;
                        }

                        return false;
                    });
                    answers = answers.map(item => item.value);
                }
                if (answers.length === 0) {
                    Array.from(target.querySelectorAll("input[data-type='answer']")).forEach((item) => {
                        item.classList.add("wrong");
                    });

                    return;
                }
                qData = {
                    type: this.state.questionsData[target.id - 1] ? this.state.questionsData[target.id - 1].type : type,
                    number: this.state.questionsData[target.id - 1] ? this.state.questionsData[target.id - 1].number : target.id,
                    question: target.querySelector("textarea").value ? target.querySelector("textarea").value : this.state.questionsData[target.id - 1].question,
                    answers,
                };
            } else if (target.getAttribute("data-type") === "QFileTempl" ||
                target.getAttribute("data-type") === "QTextTempl" ||
                target.getAttribute("data-type") === "QRatingTempl") {
                if (!target.querySelector("textarea").value) {
                    target.querySelector("textarea").classList.add("wrong");
                }

                qData = {
                    type: this.state.questionsData[target.id - 1] ? this.state.questionsData[target.id - 1].type : type,
                    number: this.state.questionsData[target.id - 1] ? this.state.questionsData[target.id - 1].number : target.id,
                    question: target.querySelector("textarea").value ? target.querySelector("textarea").value : this.state.questionsData[target.id - 1].question,
                };
            } else if (target.getAttribute("data-type") === "QScaleTempl") {
                const question = target.querySelector("textarea");
                const from = target.querySelector("input[data-id='from']");
                const to = target.querySelector("input[data-id='to']");

                question.classList.remove("wrong");
                from.classList.remove("wrong");
                to.classList.remove("wrong");

                if (!question.value) {
                    question.classList.add("wrong");
                }
                if (!from.value || !this.isNumeric(from.value)) {
                    from.classList.add("wrong");
                }
                if (!to.value || !this.isNumeric(to.value)) {
                    to.classList.add("wrong");
                }

                qData = {
                    type: this.state.questionsData[target.id - 1] ? this.state.questionsData[target.id - 1].type : "QScale",
                    number: this.state.questionsData[target.id - 1] ? this.state.questionsData[target.id - 1].number : target.id,
                    question: question.value ? question.value : this.state.questionsData[target.id - 1].question,
                    from: from.value ? from.value : this.state.questionsData[target.id - 1].from,
                    to: to.value ? to.value : this.state.questionsData[target.id - 1].to,
                };
            }

            data[target.id - 1] = qData;
            this.setState({
                questions,
                questionsData: data,
            });
        };

        this.cancelPoll = () => {
            this.setState({
                questions: [],
                questionsData: [],
                questionsCount: 0,
            });
        };

        this.savePoll = () => {
            const today = new Date();
            const data = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
            const pollData = {
                name: document.getElementById("pollName").value || `Poll #${this.state.polls.length + 1}`,
                changed: data,
                answers: [],
                results: [],
                pollData: this.state.questionsData,
                user: this.props.userId,
            };
            this.props.savePollAction(pollData, this.props.userId);
            this.props.history.push("/userPolls");
        };
    }

    render() {
        return (
            <div className="box">
                <MainHeader className="header" />
                <MainContainer main>
                    <Navigation />
                    <Container flex>
                        <Container>
                            <InputContainer>Poll Name:
                                <DefaultField type="text" id="pollName" placeholder={`Poll #${this.state.polls.length + 1}`}/>
                            </InputContainer>
                            <p>Questions count: <span id="qCount">{this.state.questionsCount}</span></p>
                            <Container item>
                                <section className="block">
                                    <Caption block>Choose question type</Caption>
                                    <abbr className="questionType" title="Question with one answer">
                                        <Btn block onClick={this.addQ} id="QWithOneATempl">
                                            <i className="fa fa-list" aria-hidden="true" />
                                        </Btn>
                                    </abbr>
                                    <abbr className="questionType" title="Question with several answers">
                                        <Btn block onClick={this.addQ} id="QWithSeveralATempl">
                                            <i className="fa fa-list-ol" aria-hidden="true" />
                                        </Btn>
                                    </abbr>
                                    <abbr className="questionType" title="Text">
                                        <Btn block onClick={this.addQ} id="QTextTempl">
                                            <i className="fa fa-font" aria-hidden="true" />
                                        </Btn>
                                    </abbr>
                                    <abbr className="questionType" title="File">
                                        <Btn block onClick={this.addQ} id="QFileTempl">
                                            <i className="fa fa-file" aria-hidden="true" />
                                        </Btn>
                                    </abbr>
                                    <abbr className="questionType" title="Rating">
                                        <Btn block onClick={this.addQ} id="QRatingTempl">
                                            <i className="fa fa-star-o" aria-hidden="true" />
                                        </Btn>
                                    </abbr>
                                    <abbr className="questionType" title="Scale">
                                        <Btn block onClick={this.addQ} id="QScaleTempl">
                                            <i className="fa fa-battery-half" aria-hidden="true" />
                                        </Btn>
                                    </abbr>
                                </section>
                            </Container>
                            { this.state.questionsCount === 0 ? "" : <PollContainer
                                edit={this.editQ}
                                deleteQField={this.deleteQField}
                                save={this.saveQ}
                                delete={this.deleteQ}
                                data={this.state.questionsData}
                                questions={this.state.questions}
                                pollContainer
                                id="pollsContainer"
                            />}
                            <MainButton id="save" onClick={this.savePoll} inline type="button" value="Save"/>
                            <MainButton id="cancel" onClick={this.cancelPoll} type="button" inline value="Cancel"/>
                        </Container>
                    </Container>
                </MainContainer>
            </div>
        );
    }
}

NewPoll.propTypes = {
    history: propTypes.object,
    savePollAction: propTypes.func,
    userId: propTypes.object,
};

function mapStateToProps(state) {
    return {
        userId: state.user.id,
    };
}
export default connect(mapStateToProps, { savePollAction })(NewPoll);
