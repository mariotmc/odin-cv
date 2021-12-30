import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div className="education">
        <h3>Education</h3>
        <input type="text" name="faculty" id="faculty" placeholder="Faculty" required />
        <input type="text" name="degree" id="degree" placeholder="Degree" required />
        <input type="text" name="from" placeholder="From" />
        <input type="text" name="to" placeholder="To" required />
      </div>
    );
  }
}
