import React, { Component } from "react";
import App from "../App";
import configureStore from "./configureStore";
import { Provider } from "react-redux";
const store = configureStore();

/**
 * Setup
 * @extends {Component}
 */
export default class Setup extends Component {
  
  componentDidMount() {}
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
