import propTypes from 'prop-types';
import { List } from './ContactList.styled';
import { ContactCard } from 'components/ContactCard/ContactCard';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsApi';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filterValue = useSelector(state => state.filter);

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <List>
      {!isLoading &&
        filteredContacts.reverse().map(({ name, id, number }) => {
          return (
            <ContactCard
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleleButton={() => deleteContact(id)}
          />            
          );
        })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      phone: propTypes.string.isRequired,
    })
  ),
};

export default ContactList;
