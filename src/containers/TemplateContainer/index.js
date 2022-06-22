import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
/**
 * HomeContainer
 * @extends {Component}
 */
class HomeContainer extends Component {
  

  componentDidMount() {
    
  }


  render() {
    return (
      <React.Fragment>
        <div>Template container</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
