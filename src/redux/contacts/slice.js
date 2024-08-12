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
    builder.addCase(
      contactsOperations.getAll.fulfilled,
      (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      },
    ),
});

const { reducer } = contactsSlice;

export default reducer;
