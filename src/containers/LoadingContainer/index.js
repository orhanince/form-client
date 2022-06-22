import React, { Component } from "react";
import { GetUsers } from "./actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

/**
 * LoadingContainer
 * @extends {Component}
 */
class LoadingContainer extends Component {
  

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return <p>.</p>;
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

export default connect(mapStateToProps, mapDispatchToProps)(LoadingContainer);
