import styled from "styled-components";
import React, { Component } from "react";
import propTypes from "prop-types";

import RouterLink from "./routerLink";

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 20%;
	max-width: 220px;
	height: 100%;
	padding: 40px 20px;
	list-style: none;
	@media (max-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height: auto;
		max-width: 100%;
		padding: 5px 0;
  	}
`;

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.directTo = (event) => {
            const direct = event.target.id;

            this.props.history.push(`/${direct}`);
        };
    }

    render() {
        return (
            <Nav>
                <RouterLink nav to="/main">Main</RouterLink>
                <RouterLink nav to="/newPoll">New poll</RouterLink >
                <RouterLink nav to="/myPolls">My poll</RouterLink>
                <RouterLink nav to="/pollTemplates">Poll templates</RouterLink>
                <RouterLink nav to="/users">Users</RouterLink>
            </Nav>
        );
    }
}

Navigation.propTypes = {
    history: propTypes.object,
};
export default Navigation;
