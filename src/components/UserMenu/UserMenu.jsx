import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user: currentUser } = useAuth();

  const handleClick = () => {
    dispatch(authOperations.logout());
  };

  return (
    <div>
      <span>Welcome, {currentUser.name}</span>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
