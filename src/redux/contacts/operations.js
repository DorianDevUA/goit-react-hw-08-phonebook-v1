import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getAll = createAsyncThunk('contacts/getAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/contacts`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const contactsOperations = {
  getAll,
};

export default contactsOperations;
