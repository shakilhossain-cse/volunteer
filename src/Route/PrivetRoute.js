import React from 'react'
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    
    let auth = useAuth();
    return (
        <Route
        {...rest}
        render={({ location }) =>
        auth.User.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    )
}

export default PrivetRoute
