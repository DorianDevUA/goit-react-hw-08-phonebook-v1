import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import HomeView from 'pages/HomeView';
import PhonebookView from 'pages/PhonebookView';
import RegisterView from 'pages/RegisterView';
import LoginView from 'pages/LoginView';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import RestrictedRoute from 'components/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route
            path="contacts"
            element={<PrivateRoute component={PhonebookView} />}
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={RegisterView}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={LoginView} redirectTo="/contacts" />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
