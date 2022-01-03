import React, { Component } from "react";

export default class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //prettier-ignore
      <div className="general-information">
        <h3>General Information</h3>
        <input type="text" name="firstName" id="first-name" placeholder="First name" required onChange={this.props.handleChange("firstName")}/>
        <input type="text" name="last-name" id="last-name" placeholder="Last name" required onChange={this.props.handleChange("lastName")}  />
        <input type="text" name="title" id="title" placeholder="Title" onChange={this.props.handleChange("title")}  />
        <label htmlFor="photo">
          Photo
          <input type="file" name="photo" id="photo" accept="image/png, image/jpeg" style={{visibility: "hidden"}} placeholder="Photo" required onChange={this.props.handleChange("photo")} />
        </label>
        <input type="text" name="address" id="address" placeholder="Address" required onChange={this.props.handleChange("address")}  />
        <input type="text" name="phone number" id="phone number" placeholder="Phone number" required onChange={this.props.handleChange("phoneNumber")}  />
        <input type="text" name="email" id="email" placeholder="Email" required onChange={this.props.handleChange("email")}  />
        <textarea name="description" id="description" placeholder="Description" required onChange={this.props.handleChange("description")}></textarea>
      </div>
    );
  }
}
