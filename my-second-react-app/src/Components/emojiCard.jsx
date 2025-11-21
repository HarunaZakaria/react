import React from 'react';

const EmojiCard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.emoji}</p>
      <p>{props.means}</p>
    </div>
  );
};

export default EmojiCard;
