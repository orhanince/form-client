import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { PricingItem } from './../../components';
/**
 * PricingContainer
 * @extends {Component}
 */
class PricingContainer extends Component {
  

  componentDidMount() {
    
  }


  render() {
    return (
      <React.Fragment>
        <div>Pricing container</div>
        <PricingItem 
        packageTitle='Başlangıç' 
        ayTitle='Ücretsiz' 
        ayTitleKucuk='Tüm özellikleri içerir' 
        formAdetTitle='5 Form' 
        formLimitTitle='Form limiti'
        aylikFormYaniti='100'
        aylikFormYanitiAciklama='Aylık form yanıtı' />
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PricingContainer);
