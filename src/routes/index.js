// routes
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';
import PrivateRoute from './private-route';
import PaymentContainer from '../containers/PaymentContainer';
import ContactContainer from '../containers/ContactContainer';
import PricingContainer from '../containers/PricingContainer';
import TemplateContainer from '../containers/TemplateContainer';
import SupportContainer from '../containers/SupportContainer';
import FormListContainer from '../containers/FormListContainer';
/**
 * Define app routes.
 * Home page returns users and detail page returns single user details data.
 */
const AppRoute = () => {
  const userId = localStorage.getItem('user_id')
  const userToken = localStorage.getItem('user_token')
  console.log('user_token_is', userToken)
  return (
    <Router>
      <Switch>
        <Route exact path='/contact' component={ContactContainer}></Route>
        <Route exact path='/templates' component={TemplateContainer}></Route>
        <Route exact path='/pricing' component={PricingContainer}></Route>
        <Route exact path='/support' component={SupportContainer}></Route>
        <PrivateRoute exact path='/' component={HomeContainer}></PrivateRoute>
        <Route exact path='/login' component={LoginContainer}></Route>
        <Route exact path='/register' component={RegisterContainer}></Route>
        <PrivateRoute exact path='/buy' component={PaymentContainer}></PrivateRoute>
        <PrivateRoute exact path='/forms' component={FormListContainer}></PrivateRoute>
      </Switch>
    </Router>
  );
};

export default AppRoute;
