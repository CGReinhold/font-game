import React from 'react';
import classNames from 'classnames';
import './Phrase.css';

interface PhraseProps {
  level?: number;
}

const Phrase: React.FC<PhraseProps> = ({ level = 0 }) => {
  const levels = Array.from({length: level}, (_, i) => `level${i + 1}`);
  const classes = classNames(levels);

  return (
    <p className={classes}>
      I wonder if I've been changed in the night.
      Let me think.
      Was I the same when I got up this morning?
      I almost think I can remember feeling a little different.
      But if I'm not the same, the next question is 'Who in the world am I?' Ah, that's the great puzzle! {level}
    </p>
  )
}

export default Phrase;