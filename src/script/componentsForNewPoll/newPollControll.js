import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";

import store from "../logic/store";
import update from "../logic/update";

import QuestionBox from "../componentsForNewPoll/questionBox";
import QWithOneATempl from "../componentsForNewPoll/questionsTempl/QWithOneATempl";
import QWithSeveralATempl from "../componentsForNewPoll/questionsTempl/QWithSeveralATempl";
import QTextTempl from "../componentsForNewPoll/questionsTempl/QTextTempl";
import QFileTempl from "../componentsForNewPoll/questionsTempl/QFileTempl";
import QRatingTempl from "../componentsForNewPoll/questionsTempl/QRatingTempl";
import QScaleTempl from "../componentsForNewPoll/questionsTempl/QScaleTempl";

import QWithOneA from "../componentsForNewPoll/questions/QWithOneA";
import QWithSeveralA from "../componentsForNewPoll/questions/QWithSeveralA";
import QText from "../componentsForNewPoll/questions/QText";
import QFile from "../componentsForNewPoll/questions/QFile";
import QRating from "../componentsForNewPoll/questions/QRating";
import QScale from "../componentsForNewPoll/questions/QScale";

export function isRequired(event) {
    let fieldsArray = Array.from(document.querySelectorAll("input[data-id=\"requiredField\"]"));

    fieldsArray = fieldsArray.map(item => item.closest("label"));
    if (event.target.checked === true) {
        this.required = true;
        fieldsArray.forEach(item => item.classList.remove("hidden"));
    } else {
        this.required = false;
        fieldsArray.forEach(item => item.classList.add("hidden"));
    }
}

export function isWithProcessBar(event) {
    const target = event.target;

    this.processBar = target.checked;
}

export function isNumeric(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

export function renderQ(questions) {
    if (questions.length === 0) {
        ReactDOM.render(
            <QuestionBox>Choose type of new question</QuestionBox>,
            document.getElementById("pollsContainer"),
        );

        return;
    }
    ReactDOM.render(
        <div>
            {questions.map((item, i) => {
                if (item === null) { return ""; }
                if (item === "QWithOneA") {
                    return <QWithOneA required={this.required} data={this.questionsData[i]} number={i + 1} edit={this.editQ} delete={this.deleteQ}/>;
                }
                if (item === "QWithOneATempl") {
                    return <QWithOneATempl required={this.required} data={this.questionsData[i]} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
                }
                if (item === "QWithSeveralA") {
                    return <QWithSeveralA required={this.required} data={this.questionsData[i]} number={i + 1} edit={this.editQ} delete={this.deleteQ}/>;
                }
                if (item === "QWithSeveralATempl") {
                    return <QWithSeveralATempl required={this.required} data={this.questionsData[i]} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
                }
                if (item === "QText") {
                    return <QText required={this.required} data={this.questionsData[i]} number={i + 1} edit={this.editQ} delete={this.deleteQ}/>;
                }
                if (item === "QTextTempl") {
                    return <QTextTempl required={this.required} data={this.questionsData[i]} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
                }
                if (item === "QFile") {
                    return <QFile required={this.required} data={this.questionsData[i]} number={i + 1} edit={this.editQ} delete={this.deleteQ}/>;
                }
                if (item === "QFileTempl") {
                    return <QFileTempl required={this.required} data={this.questionsData[i]} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
                }
                if (item === "QRating") {
                    return <QRating required={this.required} data={this.questionsData[i]} number={i + 1} edit={this.saveQ} delete={this.deleteQ}/>;
                }
                if (item === "QRatingTempl") {
                    return <QRatingTempl required={this.required} data={this.questionsData[i]} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
                }
                if (item === "QScale") {
                    return <QScale required={this.required} data={this.questionsData[i]} number={i + 1} edit={this.editQ} delete={this.deleteQ}/>;
                }
                if (item === "QScaleTempl") {
                    return <QScaleTempl required={this.required} data={this.questionsData[i]} number={i + 1} save={this.saveQ} delete={this.deleteQ}/>;
                }
            })}
        </div>,
        document.getElementById("pollsContainer"),
    );
}

export function editQ(event) {
    const target = event.target.closest("div");
    this.questions[target.id - 1] = `${target.getAttribute("data-type")}Templ`;
    this.renderQ(this.questions);
}

export function deleteQ(event) {
    const target = event.target.closest("div");

    this.questions.splice(target.id - 1, 1);
    this.questionsData.splice(target.id - 1, 1);
    this.questionsData = this.questionsData.map((item, i) => {
        if (item.number != i + 1) {
            item.number = i + 1;
        }

        return item;
    });
    document.getElementById("pollsContainer").innerHTML = "";
    this.renderQ(this.questions);
}

export function addQ(event) {
    const target = event.target;

    this.questionsCount++;
    document.getElementById("qCount").innerHTML = this.questionsCount;
    this.questions.push(target.id);
    this.renderQ(this.questions);
}

export function saveQ(event) {
    const target = event.target.closest("div");
    let qData = {};
    const type = target.getAttribute("data-type").split("Tem")[0];
    this.questions[target.id - 1] = type;

    if (target.getAttribute("data-type") === "QWithOneATempl" || target.getAttribute("data-type") === "QWithSeveralATempl") {
        let answers = Array.from(target.querySelectorAll("input[data-type=\"answer\"]"));

        if (!target.querySelector("textarea").value) {
            target.querySelector("textarea").classList.add("wrong");
        }
        if (this.questionsData[target.id - 1]) {
            const existingAnswers = this.questionsData[target.id - 1].answers;

            answers = answers.filter((item, i) => {
                if (item.value === "" && existingAnswers[i]) {
                    return item;
                } else if (item.value !== "") {
                    return item;
                }

                return false;
            });
            answers = answers.map((item, i) => item.value || existingAnswers[i]);
        } else {
            answers = answers.filter((item) => {
                if (item.value !== "") {
                    return item;
                }

                return false;
            });
            answers = answers.map(item => item.value);
        }

        qData = {
            type: this.questionsData[target.id - 1] ? this.questionsData[target.id - 1].type : type,
            number: this.questionsData[target.id - 1] ? this.questionsData[target.id - 1].number : target.id,
            question: target.querySelector("textarea").value ? target.querySelector("textarea").value : this.questionsData[target.id - 1].question,
            answers,
        };
    } else if (target.getAttribute("data-type") === "QFileTempl" ||
        target.getAttribute("data-type") === "QTextTempl" ||
        target.getAttribute("data-type") === "QRatingTempl") {
        if (!target.querySelector("textarea").value) {
            target.querySelector("textarea").classList.add("wrong");
        }

        qData = {
            type: this.questionsData[target.id - 1] ? this.questionsData[target.id - 1].type : type,
            number: this.questionsData[target.id - 1] ? this.questionsData[target.id - 1].number : target.id,
            question: target.querySelector("textarea").value ? target.querySelector("textarea").value : this.questionsData[target.id - 1].question,
        };
    } else if (target.getAttribute("data-type") === "QScaleTempl") {
        const question = target.querySelector("textarea");
        const from = target.querySelector("input[data-id=\"from\"]");
        const to = target.querySelector("input[data-id=\"to\"]");

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
            type: this.questionsData[target.id - 1] ? this.questionsData[target.id - 1].type : "QScale",
            number: this.questionsData[target.id - 1] ? this.questionsData[target.id - 1].number : target.id,
            question: question.value ? question.value : this.questionsData[target.id - 1].question,
            from: from.value ? from.value : this.questionsData[target.id - 1].from,
            to: to.value ? to.value : this.questionsData[target.id - 1].to,
        };
    }
    this.questionsData[target.id - 1] = qData;
    this.renderQ(this.questions);
}

export function cancelPoll() {
    ReactDOM.render(
        <QuestionBox>Choose type of new question</QuestionBox>,
        document.getElementById("pollsContainer"),
    );
}

export function savePoll() {
    const today = new Date();
    const data = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const id = JSON.parse(localStorage.getItem("polls")).length + 1;
    const userData = store.getState().user;
    const pollData = {
        id,
        name: document.getElementById("pollName").value || `Poll #${this.polls.length + 1}`,
        changed: data,
        answers: [],
        link: `http://localhost:8080/poll_${id}`,
        results: [],
        pollData: this.questionsData,
    };
    axios.post("https://5981a9d2139db000114a2d9c.mockapi.io/polls", pollData)
        .then((poll) => {
            return axios.put(`https://5981a9d2139db000114a2d9c.mockapi.io/users/${userData.id}`, {
                id: userData.id,
                registered: userData.registered,
                name: userData.name,
                email: userData.email,
                status: userData.status,
                polls: [...userData.polls, poll.data.id],
                password: userData.password,
            });
        })
        .then(() => {
            update();
        });
}
