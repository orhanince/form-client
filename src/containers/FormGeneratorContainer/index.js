import React, { Component } from "react";
import { GetUsers } from "./actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

/**
 * FormGeneratorContainer
 * @extends {Component}
 */
class FormGeneratorContainer extends Component {
  

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return <p>Form generator container goes here!</p>;
  }
}

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    getUsers: () => {
      dispatch(GetUsers());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormGeneratorContainer);
