import React, { Component } from 'react';
import { DoLogin } from './actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withTranslation } from 'react-i18next';
import LoginForm from './login-form';
import './styles.css'
/**
 * LoginContainer
 * @extends {Component}
 */
class LoginContainer extends Component {
  
  constructor(props) {
    super(props);
    this.userLogin = this.userLogin.bind(this);
  }

  componentDidMount() {
    
  }

  userLogin(values) {
    this.props.login(values)
  }

  
  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        
        {/*<LoginForm buttonTitle={t('loginForm.login')} loginValidateData={
        {
          email: t('loginForm.email'),
          emailLabel: t('loginForm.emailLabel'),
          emailPlaceholder: t('loginForm.emailPlaceholder'),
          password: t('loginForm.password'),
          passwordLabel:  t('loginForm.passwordLabel'),
          passwordPlaceholder: t('loginForm.passwordPlaceholder'),
          enterValidEmail: t('loginForm.enterValidEmail')
        }
      } submitForm={this.userLogin}/>*/}
      
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    login: (values) => {
      dispatch(DoLogin(values, (res) => {
        ownProps.history.push('/')
      }, () => {

      }));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(LoginContainer));
