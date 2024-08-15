import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFilter } from 'hooks';
import { contactsOperations } from 'redux/contacts';
import IconButton from 'components/IconButton';
import ContactFilter from 'components/ContactFilter';
import ContactList from 'components/ContactList';
import { MdAdd } from 'react-icons/md';
import Modal from 'components/Modal';
import ContactForm from 'components/ContactForm';

const PhonebookPage = () => {
  const [showCreateContactModal, setShowCreateContactModal] = useState(false);
  const dispatch = useDispatch();
  const { filteredContacts: contacts } = useFilter();
  const isContactsExist = contacts.length > 0;

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
      <ContactFilter />
      {isContactsExist && <ContactList contacts={contacts} />}
      {showCreateContactModal && (
        <Modal title="Create contact" onClose={toggleCreateContactModal}>
          <ContactForm />
        </Modal>
      )}
    </>
  );
};

export default PhonebookPage;
