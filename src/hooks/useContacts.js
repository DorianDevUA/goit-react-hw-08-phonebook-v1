import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';

const useContacts = () => {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const error = useSelector(contactsSelectors.selectError);

  return {
    contacts,
    isLoading,
    error,
  };
};

export default useContacts;
