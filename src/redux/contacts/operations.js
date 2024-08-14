import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const getAll = createAsyncThunk('contacts/getAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/contacts`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const createContact = createAsyncThunk(
  'contacts/create',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post(`/contacts`, contact);
      toast.success(`Додано новий контакт: ${data.name}!`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.error(`Контакт видалено: ${response.data.name}!`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const updateContact = createAsyncThunk(
  'contacts/update',
  async ({ contactId, updates }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`, updates);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const contactsOperations = {
  getAll,
  createContact,
  deleteContact,
  updateContact,
};

export default contactsOperations;
