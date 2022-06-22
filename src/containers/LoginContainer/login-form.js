import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { AppButton, CustomInput } from '../../components';
import { Form } from 'react-bootstrap'
import  _ from 'lodash'

/**
 * Define an user form for creating a new user and updating the current user
 */
const LoginForm = (props) => {
  const { buttonTitle,loginValidateData, editMode, submitForm } = props;
  
  const validationSchema = Yup.object({
    email: Yup.string().email(loginValidateData.enterValidEmail).required(loginValidateData.email).min(3,'Name can not be less than 3 characters'),
    password: Yup.string().required(loginValidateData.password).min(2,'Surname can not be less than 2 characters')
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      submitForm(values)
    }
  });

  return (
      <div>
      <Form onSubmit={handleSubmit} onChange={handleChange} style={{marginTop: '20px'}}>
      <CustomInput
        label={loginValidateData.emailLabel}
        type='email'
        name='email'
        placeholder={loginValidateData.emailPlaceholder}
        onChange={handleChange}
        values={values.email}
        errors={errors.email}/>

        <CustomInput
        label={loginValidateData.passwordLabel}
        type='password'
        name='password'
        placeholder={loginValidateData.passwordPlaceholder}
        onChange={handleChange}
        defaultValue={''}
        values={values.password}
        errors={errors.password}/>
        <AppButton
            style={{marginTop: '15px'}}
            title={buttonTitle}
            variantType='PRIMARY'
            onClick={handleSubmit}
          />
      </Form>
      </div>
  );
};

/**
 * Define prop types of user-form component
 * @param {{user: object, backTitle: string, goBack:func, buttonTitle: string, editMode: boolean, submitForm: func}} props - UserForm object properties
 */
LoginForm.propTypes = {
  backTitle: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  submitForm: PropTypes.func.isRequired
};

export default LoginForm;
