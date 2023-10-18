import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import { contactsReducer } from './contactSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
