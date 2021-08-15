import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={(props) =>
        authed ? (
          <Component {...props} authed={authed} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
