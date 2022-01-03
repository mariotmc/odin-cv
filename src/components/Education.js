import React, { Component } from "react";

export default class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //prettier-ignore
      <div className="education">
        <h3>Education</h3>
        <input type="text" name="faculty" id="faculty" placeholder="Faculty" required onChange={this.props.handleChange("faculty")} />
        <input type="text" name="degree" id="degree" placeholder="Degree" required onChange={this.props.handleChange("degree")} />
        <input type="text" name="from" id="education-from" placeholder="From" required onChange={this.props.handleChange("educationFrom")} />
        <input type="text" name="to" id="education-to" placeholder="To" required onChange={this.props.handleChange("educationTo")} />
        <button onClick={this.props.addEducation}>Add</button>
        <button onClick={this.props.deleteEducation}>Delete</button>
      </div>
    );
  }
}
