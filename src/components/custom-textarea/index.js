import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

/**
 * CustomTextarea
 * @param {object} props
 */
const CustomTextarea = (props) => {
  
  const { label, errors, type, name, placeholder, onChange, defaultValue } = props;
  return (
    <Form.Group style={{marginBottom: '5px'}}>
      <Form.Label>{label}</Form.Label><br/>
      <Form.Control
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        autoComplete="off" as="textarea" rows={3} /><br/>
      <Form.Text style={{fontSize: '15px', color: 'red'}}>{errors ? errors : null}</Form.Text>
    </Form.Group>
  );
};

/**
 * Define prop types of app-title component
 * @param {{title: string }} props - PageTitle object property
 */
CustomTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  errors: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string
};

export default CustomTextarea;
