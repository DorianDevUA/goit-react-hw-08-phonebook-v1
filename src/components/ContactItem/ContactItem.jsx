import { useDispatch } from 'react-redux';
import { MdPerson, MdCall } from 'react-icons/md';
import { contactsOperations } from 'redux/contacts';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  const handleDelete = () => {
    dispatch(contactsOperations.deleteContact(id));
  };

  return (
    <>
      <div>ContactItem</div>
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
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
};

export default ContactItem;
