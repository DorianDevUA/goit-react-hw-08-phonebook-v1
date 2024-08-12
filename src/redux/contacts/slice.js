import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(contactsOperations.getAll.pending, state => {
        state.isLoading = true;
      })
      .addCase(contactsOperations.getAll.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(contactsOperations.getAll.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(contactsOperations.createContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        contactsOperations.createContact.fulfilled,
        (state, { payload }) => {
          state.items.push(payload);
          state.error = null;
          state.isLoading = false;
        },
      )
      .addCase(
        contactsOperations.createContact.rejected,
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        },
      )
      .addCase(contactsOperations.deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        contactsOperations.deleteContact.fulfilled,
        (state, { payload }) => {
          state.items = state.items.filter(item => item.id !== payload.id);
          state.isLoading = false;
        },
      )
      .addCase(
        contactsOperations.deleteContact.rejected,
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        },
      )
      .addCase(contactsOperations.updateContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        contactsOperations.updateContact.fulfilled,
        (state, { payload }) => {
          state.items = state.items.map(item =>
            item.id === payload.id ? payload : item,
          );
          state.isLoading = false;
        },
      )
      .addCase(
        contactsOperations.updateContact.rejected,
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        },
      ),
});

const { reducer } = contactsSlice;

export default reducer;
