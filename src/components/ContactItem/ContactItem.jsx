import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdPerson, MdCall } from 'react-icons/md';
import { contactsOperations } from 'redux/contacts';
import Modal from 'components/Modal';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { id, name, number } = contact;

  const handleDelete = () => {
    dispatch(contactsOperations.deleteContact(id));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div>
        <ul>
          <li>
            <MdPerson />
            <span>{name}</span>
          </li>
          <li>
            <MdCall />
            <span>{number}</span>
          </li>
        </ul>

        <button type="button" onClick={toggleModal}>
          Edit
        </button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {showModal && (
        <Modal title={`Edit contact: ${name}`} onClose={toggleModal}>
          <span>{name}</span>
        </Modal>
      )}
    </>
  );
};

export default ContactItem;
