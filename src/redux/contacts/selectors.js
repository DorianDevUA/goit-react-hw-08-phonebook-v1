const selectContacts = state => state.contacts.items;
const selectIsLoading = state => state.contacts.isLoading;
const selectError = state => state.contacts.error;

const contactSelectors = {
  selectContacts,
  selectIsLoading,
  selectError,
};

export default contactSelectors;
