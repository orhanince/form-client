import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import buttonVariantTypes from '../../enums/button-variant-types';
/**
 * AppButton
 * @param {object} props
 */
const AppButton = (props) => {
  const { title, variantType, onClick, style } = props;
  return (
    <React.Fragment>
    <Button
      style={style}
      onClick={onClick}
      variant={
        Object.prototype.hasOwnProperty.call(buttonVariantTypes, variantType) &&
        buttonVariantTypes[variantType]
      }
    >
      {title}
    </Button>
    </React.Fragment>
  );
};

/**
 * Define prop types of app-button component
 * @param {{title: string, variantType: string, onClick: func}} props - AppButton object properties
 */
AppButton.propTypes = {
  title: PropTypes.string.isRequired,
  variantType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default AppButton;
