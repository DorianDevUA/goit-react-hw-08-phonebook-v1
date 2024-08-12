import { useSelector } from 'react-redux';
import { contactSelectors } from 'redux/contacts';

const useContacts = () => {
  const contacts = useSelector(contactSelectors.selectContacts);
  const isLoading = useSelector(contactSelectors.selectIsLoading);
  const error = useSelector(contactSelectors.selectError);

  return {
    contacts,
    isLoading,
    error,
  };
};

export default useContacts;
