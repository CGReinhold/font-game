import React from 'react';
import classNames from 'classnames';
import './Phrase.css';
import { Languages } from './Languages';
import { useLabels } from './useLabels';

interface PhraseProps {
  level?: number;
  language: Languages;
}

const Phrase: React.FC<PhraseProps> = ({ language, level = 0 }) => {
  const levels = Array.from({length: level}, (_, i) => `level${i + 1}`);
  const classes = classNames(levels);
  const { PHRASE } = useLabels(language);

  return (
    <p className={classes}>
      {PHRASE}
    </p>
  );
};

export default Phrase;