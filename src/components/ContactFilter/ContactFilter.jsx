import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter';

const ContactFilter = ({ value, onChange }) => {
  const dispatch = useDispatch();
  const filterInputId = nanoid();

  const handleChange = evt => {
    const filterQuery = evt.target.value;

    onChange(filterQuery);
    dispatch(setFilter(filterQuery));
  };

  return (
    <label htmlFor={filterInputId}>
      <span>Find contacts by name:</span>
      <input
        type="search"
        value={value}
        name="contactsFilter"
        id={filterInputId}
        onChange={handleChange}
      />
    </label>
  );
};

export default ContactFilter;
