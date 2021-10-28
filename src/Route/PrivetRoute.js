import React from 'react'
import { Route,Redirect } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
  const { User, IsLoading } = useAuth();
  
  if (IsLoading) {
    return  <p className="text-red-500">Loading...</p>
  }

    return (
      <Route
      {...rest}
      render={({ location }) =>
        User.email ? (
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
