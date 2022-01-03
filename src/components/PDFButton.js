import React, { Component } from "react";

export default class PDFButton extends Component {
  render() {
    return (
      <button id="pdfButton" onClick={this.props.handlePDF}>
        Generate PDF
      </button>
    );
  }
}
