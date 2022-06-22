import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withTranslation } from 'react-i18next';
import { ValidateEmailMessage } from './../index';
/**
 * Header
 * @extends {Component}
 */
class Header extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }


  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <div>Header</div>
        {/* <ValidateEmailMessage emailAddress={'ince.orhan@yandex.com'}/> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(Header));
