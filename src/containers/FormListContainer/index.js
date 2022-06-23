import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {GetUserForms} from './actions';
import makeUserFormListDomain from "./selectors";
/**
 * HomeContainer
 * @extends {Component}
 */
class FormListContainer extends Component {

  async componentDidMount() {
    await this.props.getUserForms()
  }


  render() {
    return (
      <React.Fragment>
        <div>Form List Container</div>
        { this.props.forms.forms.length > 0 && (
            this.props.forms.forms.map(item => {
              return (
                  <div key={item.id}>{item.form_name}</div>
              )
            })
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  forms: makeUserFormListDomain()
});

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    getUserForms: () => {
      dispatch(GetUserForms((res) => {
      }, () => {
      }));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormListContainer);
