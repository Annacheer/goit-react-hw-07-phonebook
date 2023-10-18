import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import ContactPerson from 'components/ContactPerson/ContactPesron';

const ContactList = props => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact?.name?.toLowerCase().includes(filter?.toLowerCase() || '')
  );
  console.log(filteredContacts);

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactPerson
          key={contact.id}
          contact={contact}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
