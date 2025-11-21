import React from 'react';
import EmojiCard from './emojiCard';

const createEmojiCard = (emoji) => {
  return (
    <div>
      <EmojiCard
        name={emoji.name}
        emoji={emoji.emoji}
        means={emoji.meaning.substring(0, 40)}
      />
    </div>
  );
};

export default createEmojiCard;
