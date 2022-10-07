import { ContactCards, Name, Phone, DeleteBtn } from './ContactCard.styled';


export const ContactCard = ({ name, phone, id, onDeleleButton }) => {
  return (
    <ContactCards>
      <Name>{name}</Name>
      <Phone>{phone}</Phone>
      <DeleteBtn type="button" id={id} onClick={onDeleleButton}>
        Delete
      </DeleteBtn>
    </ContactCards>
  );
};


