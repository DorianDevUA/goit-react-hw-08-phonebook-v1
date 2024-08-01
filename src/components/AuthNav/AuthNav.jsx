import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="login">Вхід</Link>
        </li>
        <li>
          <Link to="register">Реєстрація</Link>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
