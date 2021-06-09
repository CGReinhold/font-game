import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import './App.css';
import LevelManager from './LevelManager';
import PhraseContainer from './PhraseContainer';

const App: React.FC = () => {
  const [level, setLevel] = useState<number>(0);

  const onPrevious = () => setLevel(level - 1);

  const onNext = () => setLevel(level + 1);

  return (
    <div className="game">
      <div className="content">
        <h2 className="title">Font Challenge</h2>
        {isMobile && (
          <p className="mobile">
            This app may not work properly in mobile devices. Try playing it on desktop for a better experience.
          </p>
        )}
        <LevelManager level={level} onNext={onNext} onPrevious={onPrevious} />
        <div className="links">
          <a href="https://cgreinhold.dev">cgreinhold.dev</a> • <a href="https://github.com/CGReinhold/font-game">Github</a>
        </div>
      </div>
      <PhraseContainer level={level} />
    </div>
  );
}

export default App;
