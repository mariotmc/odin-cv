import React, { Component } from "react";

export default class Work extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //prettier-ignore
      <div className="experience">
        <h3>Experience</h3>
        <input type="text" name="position" id="position" placeholder="Position" required onChange={this.props.handleChange("position")} />
        <input type="text" name="company" id="company" placeholder="Company" required onChange={this.props.handleChange("company")} />
        <input type="text" name="from" id="experience-from" placeholder="From" required onChange={this.props.handleChange("experienceFrom")} />
        <input type="text" name="to" id="experience-to" placeholder="To" required onChange={this.props.handleChange("experienceTo")} />
        <button onClick={this.props.addExperience}>Add</button>
        <button onClick={this.props.deleteExperience}>Delete</button>
      </div>
    );
  }
}
