import { useSelector } from 'react-redux';
import { filterSelectors } from 'redux/filter';

const useFilter = () => {
  const filter = useSelector(filterSelectors.selectFilter);
  const filteredContacts = useSelector(filterSelectors.selectFilteredContacts);

  return {
    filter,
    filteredContacts,
  };
};

export default useFilter;
