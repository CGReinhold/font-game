import React from 'react';
import './PhraseContainer.css';
import Phrase from './Phrase';
import { Languages } from './Languages';
import { useLabels } from './useLabels';

interface PhraseContainerProps {
  level: number;
  language: Languages;
}

const PhraseContainer: React.FC<PhraseContainerProps> = ({ level, language }) => {
  const { HOVER_TO_SEE, CHANGE_STYLE } = useLabels(language);

  return (
    <section className="phrase-container">
      {level > 0 && (
        <div className="phrase-container-tip phrase-top-tip">
          {CHANGE_STYLE}
        </div>
      )}
      <div className="phrase">
        <div className="previous">
          <Phrase language={language} level={level > 0 ? level - 1 : level} />
        </div>
        <div className="current">
          <Phrase language={language} level={level} />
        </div>
      </div>
      {level > 0 && (
        <div className="phrase-container-tip phrase-bottom-tip">
          {HOVER_TO_SEE}
        </div>
      )}
    </section>
  );
}

export default PhraseContainer;
