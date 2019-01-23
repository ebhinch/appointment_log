import React, { Component } from "react";
import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleAction";

import "./App.css";

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })



class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
    console.log("clicked")
   }

  render() {
    return (
      <div>
        <button onClick={this.simpleAction}>Test redux action</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
