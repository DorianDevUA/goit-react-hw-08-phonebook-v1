import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFilter } from 'hooks';
import { contactsOperations } from 'redux/contacts';
import ContactFilter from 'components/ContactFilter';
import ContactList from 'components/ContactList';

const PhonebookPage = () => {
  const dispatch = useDispatch();
  const { filteredContacts: contacts } = useFilter();
  const isContactsExist = contacts.length > 0;

  useEffect(() => {
    dispatch(contactsOperations.getAll());
  }, [dispatch]);

  return (
    <>
      <ContactFilter />
      {isContactsExist && <ContactList contacts={contacts} />}
    </>
  );
};

export default PhonebookPage;
