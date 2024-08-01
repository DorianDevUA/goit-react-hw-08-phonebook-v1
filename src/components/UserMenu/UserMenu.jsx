import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(authSelectors.selectUser);

  const handleClick = () => {
    dispatch(authOperations.logout());
  };

  return (
    <div>
      <span>Welcome {currentUser.name}</span>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
