import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withTranslation } from 'react-i18next';
import { ValidateEmailMessage } from './../index';
/**
 * Footer
 * @extends {Component}
 */
class Footer extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }


  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <div>Footer</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(Footer));
