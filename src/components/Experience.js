import React, { Component } from "react";

export default class Work extends Component {
  render() {
    return (
      <div className="experience">
        <h3>Experience</h3>
        <input type="text" name="position" id="position" placeholder="Position" required />
        <input type="text" name="company" id="company" placeholder="Company" required />
        <input type="text" name="from" id="from" placeholder="From" required />
        <input type="text" name="to" id="to" placeholder="To" required />
        {/* requires delete and add button */}
      </div>
    );
  }
}
