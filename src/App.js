import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      first: "",
      middle: "",
      last: "",
      age: null
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h3>Handling Multiple Inputs Using One Handler Function</h3>
        <p>*Check code for notes on how this works</p>
        {/* When handling multiple input elements, you can add a name attribute to
        ea. element and let the handler fn choose what to do based on value of
        event.target.name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            name="first"
            // name is associated w/ the name of the state property
            placeholder="enter first name"
            onChange={e => this.handleInputChange(e)}
          />
          <input
            name="middle"
            placeholder="enter middle name"
            onChange={e => this.handleInputChange(e)}
          />
          <input
            name="last"
            placeholder="enter last name"
            onChange={e => this.handleInputChange(e)}
          />
          <input
            name="age"
            placeholder="enter age"
            onChange={e => this.handleInputChange(e)}
          />
        </div>
      </div>
    );
  }
}

export default App;
