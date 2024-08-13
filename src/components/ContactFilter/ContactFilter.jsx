import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filterByNameInputId = nanoid();

  const handleChange = ({ target: { value } }) => {
    console.log('value:', value);
    dispatch(setFilter(value));
  };

  return (
    <label htmlFor={filterByNameInputId}>
      <span>Find contacts by name:</span>
      <input
        type="search"
        name="contactsFilter"
        id={filterByNameInputId}
        placeholder="Search..."
        onChange={handleChange}
      />
    </label>
  );
};

export default ContactFilter;
