import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  let isLoggedIn = false;
  let userId = localStorage.getItem('user_id');
  let userToken = localStorage.getItem('user_token');
  console.log('local', localStorage.getItem('user'))
  if (userToken != undefined && userToken != null && userId != undefined && userId != null) {
    isLoggedIn = true;
  }
  
  console.log(isLoggedIn)
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
