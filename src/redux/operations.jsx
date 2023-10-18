import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://65303d606c756603295e72eb.mockapi.io/contacts'
      );
      if (response.data === 'Not found') {
        throw new Error('Failed to fetch contacts');
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://65303d606c756603295e72eb.mockapi.io/contacts',
        contact
      );
      if (response.data === 'Not found') {
        throw new Error('Failed to add contact');
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://65303d606c756603295e72eb.mockapi.io/contacts/${contactId}`
      );
      if (response.data === 'Not found') {
        throw new Error('Failed to delete contact');
      }
      return contactId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
