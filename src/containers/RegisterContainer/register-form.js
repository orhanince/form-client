import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { AppButton, CustomInput } from '../../components';
import { Form } from 'react-bootstrap'
import  _ from 'lodash'

/**
 * Check changes for updating
 * @param   {object}  user => User current data
 * @param   {object}  values => User changed data
 * @returns {boolean} true or false
 */
const getChangedValues = (values) => {
  return _.isEqual(values)
}

/**
 * Define an user form for creating a new user and updating the current user
 */
const RegisterForm = (props) => {
  const { buttonTitle,registerValidateData,submitForm } = props;
  
  const validationSchema = Yup.object({
    name: Yup.string().required(registerValidateData.name).min(3,'Name can not be less than 3 characters'),
    surname: Yup.string().required(registerValidateData.surname).min(3,'Name can not be less than 3 characters'),
    email: Yup.string().required(registerValidateData.email).min(2,'Surname can not be less than 2 characters'),
    password: Yup.string().required(registerValidateData.password).min(3, 'Job Title can no be less than 3 characters')
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      surname: '',
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
        label={registerValidateData.nameLabel}
        type='text'
        name='name'
        placeholder={registerValidateData.namePlaceholder}
        onChange={handleChange}
        
        values={values.name}
        errors={errors.name}/>
      <CustomInput
        label={registerValidateData.surnameLabel}
        type='text'
        name='surname'
        placeholder={registerValidateData.surnamePlaceholder}
        onChange={handleChange}
        
        values={values.surname}
        errors={errors.surname}/>

        <CustomInput
        label={registerValidateData.emailLabel}
        type='email'
        name='email'
        placeholder={registerValidateData.emailPlaceholder}
        onChange={handleChange}
        defaultValue={''}
        values={values.email}
        errors={errors.email}/>

        <CustomInput
        label={registerValidateData.passwordLabel}
        type='password'
        name='password'
        placeholder={registerValidateData.passwordPlaceholder}
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
 * Define prop types of register-form component
 * @param {{user: object, backTitle: string, goBack:func, buttonTitle: string, editMode: boolean, submitForm: func}} props - UserForm object properties
 */
 RegisterForm.propTypes = {
  user: PropTypes.object,
  backTitle: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  submitForm: PropTypes.func.isRequired
};

export default RegisterForm;
