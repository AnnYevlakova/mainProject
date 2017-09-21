import React, { Component } from "react";
import propTypes from "prop-types";

import img from "file-loader!../../../img/logo.png";

import DefaultLink from "../commonComponents/defaultLink";
import MenuDropdown from "../commonComponents/menuDropdown";

class MainHeader extends Component {
    render() {
        return (
            <header className="header">
                <img className="logo" src={img} alt=""/>
                <nav className="headerNav">
                    <DefaultLink header className="link" href="https://www.itechart.com/" target="_blank">about
                        us</DefaultLink>
                    <MenuDropdown history={this.props.history}/>
                </nav>
            </header>
        );
    }
}
MainHeader.propTypes = {
    history: propTypes.object,
};

export default MainHeader;
