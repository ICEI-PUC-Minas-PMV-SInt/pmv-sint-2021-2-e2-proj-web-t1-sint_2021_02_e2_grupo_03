import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import StoreContext from "../../Store/Context";

const RoutesPrivate = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);

  return (
        <Routes>
          <Route
            {...rest}
            render={() =>
              token ? <Component {...rest} /> : <Navigate to="/login" />
            }
          />
        </Routes>
  );
};

export default RoutesPrivate;
