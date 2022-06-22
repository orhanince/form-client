import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { AppButton, CustomInput, CustomTextarea } from '../../components';
import { Form } from 'react-bootstrap'
import  _ from 'lodash'
import {useTranslation} from "react-i18next";

/**
 * Define an user form for creating a new user and updating the current user
 */
const ContactForm = (props) => {
  const {t, i18n} = useTranslation('common');
  const { buttonTitle,loginValidateData, editMode, submitForm } = props;
  
  const validationSchema = Yup.object({
    name: Yup.string().required(t('general.cannotBlank',{field: t('general.name')})).min(3, 'İsim 3 harften daha az olamaz!'),
    email: Yup.string().email().required(t('general.cannotBlank',{field: t('general.email')})).min(3,'Name can not be less than 3 characters'),
    //message: Yup.string().required(t('general.cannotBlank',{field: t('general.message')}))
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
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
        label={t('general.name')}
        type='text'
        name='name'
        placeholder={t('general.formPlaceholder',{field: t('general.name')})}
        onChange={handleChange}
        values={values.name}
        errors={errors.name}/>

      <CustomInput
        label={t('general.email')}
        type='email'
        name='email'
        placeholder={t('general.formPlaceholder',{field: t('general.email')})}
        onChange={handleChange}
        values={values.email}
        errors={errors.email}/>

        <CustomInput
        label={t('general.subject')}
        type='text'
        name='subject'
        placeholder={t('general.formPlaceholder',{field: t('general.subject')})}
        onChange={handleChange}
        defaultValue={''}
        values={values.subject}
        errors={errors.subject}/>

        <CustomTextarea
        label={t('general.message')}
        type='text'
        name='message'
        placeholder={t('general.formPlaceholder',{field: t('general.message')})}
        onChange={handleChange}
        defaultValue={''}
        values={values.message}
        errors={errors.message}/>
        
        <AppButton
            style={{marginTop: '15px'}}
            title={t('general.send')}
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
ContactForm.propTypes = {
  backTitle: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  submitForm: PropTypes.func.isRequired
};

export default ContactForm;
