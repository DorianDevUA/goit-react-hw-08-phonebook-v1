import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <>
      <div>ContactList</div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
