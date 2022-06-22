import React, { Component } from "react";
import { GetUsers } from "./actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

/**
 * HomeContainer
 * @extends {Component}
 */
class PaymentContainer extends Component {
  

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return <p>Payment container!</p>;
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentContainer);
