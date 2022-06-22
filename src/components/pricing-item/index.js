import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
/**
 * AppButton
 * @param {object} props
 */
const PricingItem = (props) => {
  const { packageTitle, ayTitle, ayTitleKucuk, formAdetTitle,formLimitTitle, aylikFormYaniti,aylikFormYanitiAciklama  } = props;
  return (
    <React.Fragment>
        <div className='package-item'>
            <div className='package-title'>{packageTitle}</div>
            <div className='ay-title'>{ayTitle}</div>
            <div>{ayTitleKucuk}</div>
            <div>{formAdetTitle}</div>
            <div>{formLimitTitle}</div>
            <div>{aylikFormYaniti}</div>
            <div>{aylikFormYanitiAciklama}</div>
        </div>
    </React.Fragment>
  );
};

PricingItem.propTypes = {
  packageTitle: PropTypes.string.isRequired,
  ayTitle: PropTypes.string.isRequired,
  ayTitleKucuk: PropTypes.string.isRequired,
  formAdetTitle: PropTypes.string.isRequired,
  formLimitTitle: PropTypes.string.isRequired,
  aylikFormYaniti: PropTypes.string.isRequired,
  aylikFormYanitiAciklama: PropTypes.string.isRequired
};

export default PricingItem;
