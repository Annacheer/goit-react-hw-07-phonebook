import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await fetch(
    'https://652ffbe66c756603295e0a4c.mockapi.io/contacts'
  );
  return response.json();
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await fetch(
      'https://652ffbe66c756603295e0a4c.mockapi.io/contacts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      }
    );
    return response.json();
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await fetch(
      `https://652ffbe66c756603295e0a4c.mockapi.io/contacts/${contactId}`,
      {
        method: 'DELETE',
      }
    );
    return contactId;
  }
);
