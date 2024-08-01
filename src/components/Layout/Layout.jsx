import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';

const Layout = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
