import React, { useState } from 'react';
import './App.css';
import LevelManager from './LevelManager';
import PhraseContainer from './PhraseContainer';

const App: React.FC = () => {
  const [level, setLevel] = useState<number>(0);

  const onPrevious = () => setLevel(level - 1);

  const onNext = () => setLevel(level + 1);

  return (
    <div className="App">
      <div className="content">
        <h2 className="title">Font game</h2>
        <LevelManager level={level} onNext={onNext} onPrevious={onPrevious} />
        <div className="links">
          <a href="https://cgreinhold.dev">cgreinhold.dev</a> • <a href="https://github.com/CGReinhold">Github</a>
        </div>
      </div>
      <PhraseContainer level={level} />
    </div>
  );
}

export default App;
