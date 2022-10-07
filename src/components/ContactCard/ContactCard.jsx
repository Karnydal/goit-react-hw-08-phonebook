import { ContactCards, Name, Number, DeleteBtn } from './ContactCard.styled';


export const ContactCard = ({ name, number, id, onDeleleButton }) => {
  return (
    <ContactCards>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <DeleteBtn type="button" id={id} onClick={onDeleleButton}>
        Delete
      </DeleteBtn>
    </ContactCards>
  );
};


