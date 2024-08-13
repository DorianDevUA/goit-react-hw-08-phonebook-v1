import { createSelector } from '@reduxjs/toolkit';
import { contactsSelectors } from 'redux/contacts';

const selectFilter = state => state.filter;

//Мемоізація селектора selectFilteredContacts
const selectFilteredContacts = createSelector(
  [contactsSelectors.selectContacts, selectFilter],
  (contacts, filterValue) => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  },
);

const filterSelectors = {
  selectFilter,
  selectFilteredContacts,
};

export default filterSelectors;
