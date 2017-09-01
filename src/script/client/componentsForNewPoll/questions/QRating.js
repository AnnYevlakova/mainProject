import React, { Component } from "react";
import propTypes from "prop-types";

import Btn from "../../commonComponents/btn";
import Box from "../../commonComponents/container";
import QuestionBox from "../questionBox";
import QFooter from "../questionFooter";

class QRating extends Component {
    constructor(props) {
        super(props);
        this.required = true;
        this.stars = [];

        this.isRequired = (event) => {
            if (event.target.value === "on") {
                this.required = true;
            } else {
                this.required = false;
            }
        };

        this.prevStar = null;

        this.starClick = (event) => {
            const index = event.target.id;

            this.stars.forEach((item, i) => {
                if (i <= index) {
                    item.classList.remove("fa-star-o");
                    item.classList.add("fa-star");
                } else {
                    item.classList.add("fa-star-o");
                    item.classList.remove("fa-star");
                }
            });
            if (index == 0 && this.prevStar == index) {
                event.target.classList.remove("fa-star");
                event.target.classList.add("fa-star-o");
                this.prevStar = null;

                return;
            }
            this.prevStar = index;
        };
    }

    componentDidMount() {
        this.stars = Array.from(document.querySelectorAll("#starBox i"));
    }

    render() {
        const data = this.props.data || { question: "" };

        return (
            <QuestionBox id={this.props.number} data-type="QRating">
                <header>
                    <span>{this.props.number}.</span>
                    <span id="requiredMark">{this.props.required ? "*" : ""}</span>
                    <p>{data.question}</p>
                </header>
                <Box id="starBox">
                    <i onClick={this.starClick} id={0} className="fa fa-star-o" aria-hidden="true" />
                    <i onClick={this.starClick} id={1} className="fa fa-star-o" aria-hidden="true" />
                    <i onClick={this.starClick} id={2} className="fa fa-star-o" aria-hidden="true" />
                    <i onClick={this.starClick} id={3} className="fa fa-star-o" aria-hidden="true" />
                    <i onClick={this.starClick} id={4} className="fa fa-star-o" aria-hidden="true" />
                </Box>
                <QFooter>
                    <Btn poll onClick={this.props.edit}>edit</Btn>
                    <Btn poll onClick={this.props.delete}>delete</Btn>
                </QFooter>
            </QuestionBox>
        );
    }
}

QRating.propTypes = {
    edit: propTypes.func,
    delete: propTypes.func,
    required: propTypes.bool,
    number: propTypes.number,
    data: propTypes.string,
};
export default QRating;
