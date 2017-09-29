import React, { Component } from "react";
import propTypes from "prop-types";

import Container from "../commonComponents/container";
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

export class PollContainer extends Component {
    render() {
        return (
            <Container pollContainer id="pollContainer">
                {this.props.questions.map((item, i) => {
                    if (item === "QWithOneA") {
                        return <QWithOneA
                            key={i}
                            data={this.props.data[i]}
                            number={i + 1}
                            edit={this.props.edit}
                            delete={this.props.delete}
                        />;
                    }
                    if (item === "QWithOneATempl") {
                        return <QWithOneATempl
                            key={i}
                            deleteQField={this.props.deleteQField}
                            data={this.props.data[i]}
                            number={i + 1}
                            save={this.props.save}
                            delete={this.props.delete}
                        />;
                    }
                    if (item === "QWithSeveralA") {
                        return <QWithSeveralA
                            key={i}
                            data={this.props.data[i]}
                            number={i + 1}
                            edit={this.props.edit}
                            delete={this.props.delete}
                        />;
                    }
                    if (item === "QWithSeveralATempl") {
                        return <QWithSeveralATempl
                            key={i}
                            deleteQFiels={this.props.deleteQField}
                            data={this.props.data[i]}
                            number={i + 1}
                            save={this.props.save}
                            delete={this.props.delete}
                        />;
                    }
                    if (item === "QText") {
                        return <QText
                            key={i}
                            data={this.props.data[i]}
                            number={i + 1}
                            edit={this.props.edit}
                            delete={this.props.delete}
                        />;
                    }
                    if (item === "QTextTempl") {
                        return <QTextTempl
                            key={i}
                            data={this.props.data[i]}
                            number={i + 1}
                            save={this.props.save}
                            delete={this.props.delete}
                        />;
                    }
                    if (item === "QFile") {
                        return <QFile
                            key={i}
                            data={this.props.data[i]}
                            number={i + 1}
                            edit={this.props.edit}
                            delete={this.props.delete}
                        />;
                    }
                    if (item === "QFileTempl") {
                        return <QFileTempl
                            key={i}
                            data={this.props.data[i]}
                            number={i + 1}
                            save={this.props.save}
                            delete={this.props.delete}
                        />;
                    }
                    if (item === "QRating") {
                        return <QRating
                            key={i}
                            data={this.props.data[i]}
                            number={i + 1}
                            edit={this.props.edit}
                            delete={this.props.delete}
                        />;
                    }
                    if (item === "QRatingTempl") {
                        return <QRatingTempl
                            key={i}
                            data={this.props.data[i]}
                            number={i + 1}
                            save={this.props.save}
                            delete={this.props.delete}
                        />;
                    }
                    if (item === "QScale") {
                        return <QScale
                            key={i}
                            data={this.props.data[i]}
                            number={i + 1}
                            edit={this.props.edit}
                            delete={this.props.delete}
                        />;
                    }
                    if (item === "QScaleTempl") {
                        return <QScaleTempl
                            key={i}
                            data={this.props.data[i]}
                            number={i + 1}
                            save={this.props.save}
                            delete={this.props.delete}
                        />;
                    }
                })}
            </Container>
        );
    }
}
PollContainer.propTypes = {
    questions: propTypes.array,
    deleteQField: propTypes.func,
    data: propTypes.array,
    edit: propTypes.func,
    save: propTypes.func,
    delete: propTypes.func,
};

export default PollContainer;
