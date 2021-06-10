import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import './App.css';
import { Languages } from './Languages';
import LevelManager from './LevelManager';
import PhraseContainer from './PhraseContainer';
import { useLabels } from './useLabels';

const App: React.FC = () => {
  const [level, setLevel] = useState<number>(0);
  const [language, setLanguage] = useState<Languages>('EN');
  const { MOBILE_WARNING } = useLabels(language);

  const onPrevious = () => setLevel(level - 1);

  const onNext = () => setLevel(level + 1);

  const getLanguageClass = (lang: Languages) => {
    return language === lang ? 'selected' : undefined;
  }

  return (
    <div className="game">
      <div className="content">
        <h2 className="title">Font Challenge</h2>
        {isMobile && (
          <p className="mobile">
            {MOBILE_WARNING}
          </p>
        )}
        <LevelManager language={language} level={level} onNext={onNext} onPrevious={onPrevious} />
        <div className="links">
          <a href="https://cgreinhold.dev">cgreinhold.dev</a> • <a href="https://github.com/CGReinhold/font-game">Github</a>
        </div>
        <div className="languages">
          <button className={getLanguageClass('EN')} onClick={() => setLanguage('EN')}>EN</button>
          <button className={getLanguageClass('PT')} onClick={() => setLanguage('PT')}>PT</button>
        </div>
      </div>
      <PhraseContainer level={level} language={language} />
    </div>
  );
}

export default App;
