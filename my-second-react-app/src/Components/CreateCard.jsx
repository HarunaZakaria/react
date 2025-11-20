import React from 'react';
import Card from './Card';

const CreateCard = (contact) => {
  return (
    <div>
      <Card
        key={contact.id}
        name={contact.name}
        img={contact.imgUrl}
        phone={contact.phone}
        email={contact.email}
      />
    </div>
  );
};

export default CreateCard;
