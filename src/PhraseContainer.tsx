import React from 'react';
import './PhraseContainer.css';
import Phrase from './Phrase';

interface PhraseContainerProps {
  level: number;
}

const PhraseContainer: React.FC<PhraseContainerProps> = ({ level }) => {
  return (
    <section className="phrase-container">
      {level > 0 && (
        <div className="phrase-container-tip phrase-top-tip">
          Try to change the style to look like this
        </div>
      )}
      <div className="phrase">
        <div className="previous">
          <Phrase level={level > 0 ? level - 1 : level} />
        </div>
        <div className="current">
          <Phrase level={level} />
        </div>
      </div>
      {level > 0 && (
        <div className="phrase-container-tip phrase-bottom-tip">
          Hover the text to see previous version
        </div>
      )}
    </section>
  );
}

export default PhraseContainer;
