import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
/**
 * SupportContainer 
 * @extends {Component}
 */
class SupportContainer extends Component {
  

  componentDidMount() {
    
  }


  render() {
    return (
      <React.Fragment>
        <div>SupportContainer</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SupportContainer);
