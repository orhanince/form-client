import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import {useTranslation} from "react-i18next";
/**
 * ValidateEmailMessage
 * @param {object} props
 */
const ValidateEmailMessage = (props) => {
  const {t, i18n} = useTranslation('common');
  const { emailAddress } = props;
  return (
    <div>
        {t('general.validateEmailMessage', {field: emailAddress})}
    </div>
  );
};

/**
 * Define prop types of app-title component
 * @param {{title: string }} props - PageTitle object property
 */
 ValidateEmailMessage.propTypes = {
  emailAddress: PropTypes.string.isRequired
};

export default ValidateEmailMessage;
