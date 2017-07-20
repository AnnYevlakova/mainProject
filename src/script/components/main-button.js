import React, { Component } from 'react';

export class MainButton extends Component {
  render() {
    return (
      <input type={this.props.type} value={this.props.value} className="main-button"/>
    )
  }
}