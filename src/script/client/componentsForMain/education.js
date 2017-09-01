import React, { Component } from "react";

import Caption from "../commonComponents/caption";

import src from "file-loader!../../../img/education.jpg";

export class Education extends Component {
    render() {
        return (
            <div>
                <Caption cap>Education</Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat turpis id quam cursus fermentu.
                </p>
                <img src={src} alt=""/>
                <ul>
                    <li>The first course</li>
                    <li>The second course</li>
                    <li>The fourth course</li>
                </ul>
            </div>
        );
    }
}
export default Education;
