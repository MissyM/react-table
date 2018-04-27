import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from "./logo.svg"
import "./App.css"
import Form from "./Form"
import Table from "./Table"

class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Form onChange={fields => this.onChange(fields)} />
        <Table/>
        {/* <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p> */}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
