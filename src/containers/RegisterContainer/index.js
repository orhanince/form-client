import React, { Component } from 'react';
import { DoRegister, GetUsers } from './actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withTranslation } from 'react-i18next';
import RegisterForm from './register-form';
/**
 * RegisterContainer
 * @extends {Component}
 */
class RegisterContainer extends Component {

  constructor(props) {
    super(props);
    this.userRegister = this.userRegister.bind(this);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  userRegister(values) {
    console.log('values', values)
    this.props.register(values)
  }

  render() {
    const { t } = this.props;
    return (
      <RegisterForm buttonTitle={t('registerForm.register')} registerValidateData={
        {
          name: t('registerForm.name'),
          nameLabel: t('registerForm.nameLabel'),
          namePlaceholder: t('registerForm.namePlaceholder'),
          surname: t('registerForm.name'),
          surnameLabel: t('registerForm.surnameLabel'),
          surnamePlaceholder: t('registerForm.surnamePlaceholder'),
          email: t('registerForm.email'),
          emailLabel: t('registerForm.emailLabel'),
          emailPlaceholder: t('registerForm.emailPlaceholder'),
          password: t('registerForm.password'),
          passwordLabel:  t('registerForm.passwordLabel'),
          passwordPlaceholder: t('registerForm.passwordPlaceholder'),
          
        }
      }
      submitForm={this.userRegister}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    getUsers: () => {
      dispatch(GetUsers());
    },
    register: (values) => {
      dispatch(DoRegister(values))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(RegisterContainer));
