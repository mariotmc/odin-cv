import React, { Component } from "react";

export default class General extends Component {
  render() {
    return (
      <div className="general-information">
        <h3>General Information</h3>
        <input type="text" name="first-name" id="first-name" placeholder="First name" required />
        <input type="text" name="last-name" id="last-name" placeholder="Last name" required />
        <input type="text" name="title" id="title" placeholder="Title" />
        <input type="text" name="address" id="address" placeholder="Address" required />
        <input type="text" name="phone number" id="phone number" placeholder="Phone number" required />
        <input type="text" name="email" id="email" placeholder="Email" required />
      </div>
    );
  }
}
