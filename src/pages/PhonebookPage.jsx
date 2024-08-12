import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks';
import { contactsOperations } from 'redux/contacts';
import ContactList from 'components/ContactList';

const PhonebookPage = () => {
  const dispatch = useDispatch();
  const { contacts } = useContacts();
  const contactsExist = contacts.length > 0;

  useEffect(() => {
    dispatch(contactsOperations.getAll());
  }, [dispatch]);

  return (
    <>
      <div>toDo filterByName and filteredContacts</div>
      {contactsExist && <ContactList contacts={contacts} />}
    </>
  );
};

export default PhonebookPage;
