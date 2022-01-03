import React, { Component } from "react";
import avatar from "../media/empty-avatar.png";

export default class Template extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //prettier-ignore
      <div className="cv">
        <section className="heading">
          <h1>
            {this.props.state.firstName} {this.props.state.lastName}
          </h1>
          <p>{this.props.state.title}</p>
        </section>

        <div className="container">
          <div className="professional-information">
            <section className="description">
              <h3>Description</h3>
              {this.props.state.description}
            </section>

            <section className="experience">
              <h3>Experience</h3>
              <div className="single-experience" style={{ display: "flex", gap: "25px" }}>
                <div className="from-to-dates">
                  {this.props.state.experienceFrom} - {this.props.state.experienceTo}
                </div>
                <div className="position-company">
                  <div className="position">{this.props.state.position}</div>
                  <div className="company">{this.props.state.company}</div>
                </div>
              </div>
            </section>

            <section>
              <h3>Education</h3>
              <div className="single-education" style={{ display: "flex", gap: "25px" }}>
                <div className="from-to-dates">
                  {this.props.state.educationFrom} - {this.props.state.educationTo}
                </div>
                <div className="faculty-degree">
                  <div className="faculty">{this.props.state.faculty}</div>
                  <div className="degree">{this.props.state.degree}</div>
                </div>
              </div>
            </section>
          </div>

          <div className="personal-information">
            <img src={this.props.state.photo || avatar} alt="Empty Avatar" />
            <h3>Personal Details</h3>

            <section className="address">
              <h4>Address</h4>
              {this.props.state.address}
            </section>

            <section className="phone-number">
              <h4>Phone Number</h4>
              {this.props.state.phoneNumber}
            </section>

            <section className="email">
              <h4>Email</h4>
              {this.props.state.email}
            </section>
          </div>
        </div>
      </div>
    );
  }
}
