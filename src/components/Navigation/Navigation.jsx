import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="contacts">Phonebook</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
