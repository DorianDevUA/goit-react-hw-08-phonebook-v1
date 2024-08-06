import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useAuth } from 'hooks';
import HomeView from 'pages/HomeView';
import PhonebookView from 'pages/PhonebookView';
import RegisterView from 'pages/RegisterView';
import LoginView from 'pages/LoginView';
import Layout from 'components/Layout';
import RestrictedRoute from 'components/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.getUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing page...</b>
  ) : (
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
            <RestrictedRoute component={RegisterView} redirectTo="/contacts" />
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
  );
};

export default App;
