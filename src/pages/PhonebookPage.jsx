import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks';
import { contactsOperations } from 'redux/contacts';
import IconButton from 'components/IconButton';
import ContactFilter from 'components/ContactFilter';
import ContactList from 'components/ContactList';
import { MdAdd } from 'react-icons/md';
import Modal from 'components/Modal';
import ContactForm from 'components/ContactForm';
import { useSearchParams } from 'react-router-dom';

const PhonebookPage = () => {
  const { contacts } = useContacts();
  const [searchParams, setSearchParams] = useSearchParams();
  const contactName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const getFilteredContactsByName = (contacts, name) => {
    const normalizedName = name.toLowerCase();
    const filteredContactsByName = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedName),
    );

    return filteredContactsByName;
  };

  const filteredContacts = getFilteredContactsByName(contacts, contactName);

  const [showCreateContactModal, setShowCreateContactModal] = useState(false);
  const dispatch = useDispatch();
  // const { filteredContacts: contacts } = useFilter();
  // const isContactsExist = contacts.length > 0;
  const isContactsExist = filteredContacts.length > 0;

  useEffect(() => {
    dispatch(contactsOperations.getAll());
  }, [dispatch]);

  const toggleCreateContactModal = () => {
    setShowCreateContactModal(!showCreateContactModal);
  };

  return (
    <>
      <IconButton
        type="button"
        title="Add new contact"
        onClick={toggleCreateContactModal}
        aria-label="Add new contact"
      >
        <MdAdd size={24} />
      </IconButton>
      <ContactFilter value={contactName} onChange={updateQueryString} />
      {isContactsExist && <ContactList contacts={filteredContacts} />}
      {showCreateContactModal && (
        <Modal title="Create contact" onClose={toggleCreateContactModal}>
          <ContactForm />
        </Modal>
      )}
    </>
  );
};

export default PhonebookPage;
