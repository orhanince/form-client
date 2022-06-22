import React, { Component } from 'react';
import { DoLogin, SendContact } from './actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withTranslation } from 'react-i18next';
import ContactForm from './contact-form';
/**
 * ContactContainer
 * @extends {Component}
 */
class ContactContainer extends Component {
  
  constructor(props) {
    super(props);
    this.sendContactMessage = this.sendContactMessage.bind(this);
  }

  componentDidMount() {
    
  }

  sendContactMessage(values) {
    this.props.sendContact(values)
  }

  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <ContactForm submitForm={this.sendContactMessage}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    sendContact: (values) => {
      dispatch(SendContact(values, (res) => {
        //ownProps.history.push('/')
      }, () => {

      }));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(ContactContainer));
