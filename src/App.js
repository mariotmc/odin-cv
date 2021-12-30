import React, { Component } from "react";
import Header from "./components/Header";
import General from "./components/General";
import Experience from "./components/Experience";
import Education from "./components/Education";
import PDFButton from "./components/PDFButton";
import ResetButton from "./components/ResetButton";
import Template from "./components/Template";
import Footer from "./components/Footer";
import "./styles/style.css";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <form>
            <General />
            <Experience />
            <Education />
            <PDFButton />
            <ResetButton />
          </form>
          <Template />
        </main>
        <Footer />
      </div>
    );
  }
}
