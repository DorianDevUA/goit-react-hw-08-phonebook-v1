import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const useAuth = () => {
  const user = useSelector(authSelectors.selectUser);
  const userName = useSelector(authSelectors.selectUserName);
  const userEmail = useSelector(authSelectors.selectUserEmail);
  const token = useSelector(authSelectors.selectToken);
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  return {
    user,
    userName,
    userEmail,
    token,
    isLoggedIn,
    isRefreshing,
  };
};

export default useAuth;
