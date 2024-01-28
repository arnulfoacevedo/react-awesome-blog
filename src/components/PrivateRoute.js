import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(ThemeContext);
  return (
    <Route
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login"></Redirect>
      }
    />
  );
};

export default PrivateRoute;
