import React, { Component } from "react";

export default class ResetButton extends Component {
  render() {
    return (
      <button id="resetButton" onClick={this.props.handleReset}>
        Reset
      </button>
    );
  }
}
