import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { authSelect } from "../features/authSlice";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useSelector(authSelect);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
