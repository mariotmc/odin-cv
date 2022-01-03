import React, { Component } from "react";
import Header from "./components/Header";
import General from "./components/General";
import Experience from "./components/Experience";
import Education from "./components/Education";
import PDFButton from "./components/PDFButton";
import ResetButton from "./components/ResetButton";
import Template from "./components/Template";
import Footer from "./components/Footer";
import avatar from "./media/empty-avatar.png";
import "./styles/style.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
      position: "",
      company: "",
      experienceFrom: "",
      experienceTo: "",
      faculty: "",
      degree: "",
      educationFrom: "",
      educationTo: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handlePDF = this.handlePDF.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addEducation = this.addEducation.bind(this);
  }

  handleChange = (name) => (e) => {
    const { type } = e.target;

    if (type === "text" || type === "textarea") {
      this.setState({
        [name]: e.target.value,
      });
    } else if (type === "file") {
      this.handleChangeFile(e);
    }
  };

  handleChangeFile = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.setState({
        [name]: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  handleReset = (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll("input");
    const textarea = document.querySelector("textarea");
    const image = document.querySelector("img");

    inputs.forEach((element) => {
      element.value = "";
    });
    textarea.value = "";
    image.src = avatar;

    this.setState({
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
      position: "",
      company: "",
      experienceFrom: "",
      experienceTo: "",
      faculty: "",
      degree: "",
      educationFrom: "",
      educationTo: "",
    });
  };

  handlePDF = () => {};

  addExperience = () => {};

  deleteExperience = () => {};

  addEducation = () => {};

  deleteEducation = () => {};

  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <form>
            <General handleChange={this.handleChange} handleChange={this.handleChange} />
            <Experience
              handleChange={this.handleChange}
              addExperience={this.addExperience}
              deleteExperience={this.deleteExperience}
            />
            <Education
              handleChange={this.handleChange}
              addEducation={this.addEducation}
              deleteEducation={this.deleteEducation}
            />
            <PDFButton onPrint={this.handlePDF} />
            <ResetButton handleReset={this.handleReset} />
          </form>
          <Template state={this.state} />
        </main>
        <Footer />
      </div>
    );
  }
}
