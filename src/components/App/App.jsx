import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import HomeView from 'pages/HomeView';
import PhonebookView from 'pages/PhonebookView';
import RegisterView from 'pages/RegisterView';
import LoginView from 'pages/LoginView';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

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
          <Route path="phonebook" element={<PhonebookView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
