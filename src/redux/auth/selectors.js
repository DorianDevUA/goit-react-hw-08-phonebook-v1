const selectUser = state => state.auth.user;
const selectUserName = state => state.auth.user.name;
const selectUserEmail = state => state.auth.user.email;
const selectToken = state => state.auth.token;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  selectUser,
  selectUserName,
  selectUserEmail,
  selectToken,
  selectIsLoggedIn,
  selectIsRefreshing,
};

export default authSelectors;
