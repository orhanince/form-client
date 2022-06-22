import React, { Component } from "react";
import AppRoute from './routes';
import { Footer, Header } from './components';
/**
 * App
 * @extends {Component}
 */
class App extends Component {

  componentDidMount() {}

  render() {
    
    return (
      <React.Fragment>
        <Header/>
        <AppRoute/>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
