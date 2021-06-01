import React, { useEffect, useState } from 'react';
import './LevelManager.css';
import CodeInput from './CodeInput';
import { LEVELS, LEVEL_DESCRIPTIONS, COLORS } from './Contants';

interface LevelManagerProps {
  level: number;
  onNext: () => void;
  onPrevious: () => void;
}

const NO_LEVEL_DESCRIPTION = 'This is a game about css font attributes. Can you guess the right CSS attribute to give the text on the right the new style?';

const LevelManager: React.FC<LevelManagerProps> = ({ level, onNext, onPrevious}) => {
  const [input, setInput] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [wasWrong, setWasWrong] = useState<boolean>(false);

  const won = level === LEVELS.length && showResult;

  useEffect(() => {
    document.documentElement.style.setProperty('--neon', COLORS[level]);
  }, [level]);

  const handleNext = () => {
    if (won) return;
    
    setShowResult(false);
    setInput('');
    onNext();
  }

  const handlePrevious = () => {
    setShowResult(false);
    setInput('');
    onPrevious();
  }

  const isValid = () => {
    const parsedInput = input.replaceAll(' ', '').replace(';', '').toUpperCase();
    const parsedValidResult = LEVELS[level - 1].replaceAll(' ', '').replace(';', '').toUpperCase();
    return parsedInput === parsedValidResult;
  }

  const handleValidate = () => {
    if (won) return;

    if (isValid()) {
      setWasWrong(false);
      setShowResult(true);
    } else {
      setWasWrong(true);
    }
  };

  const handleHelp = () => {
    setInput(LEVELS[level - 1]);
    setShowResult(true);
    setWasWrong(false);
  };

  return (
    <>
      <section className="level-description">
        <p>
          {level === 0 && NO_LEVEL_DESCRIPTION}
          {level > 0 && showResult && LEVEL_DESCRIPTIONS[level - 1]}
        </p>
      </section>
      {wasWrong && <p>You got it wrong. Try again</p>}
      {level === 0 && (
        <section className="buttons">
          <button onClick={handleNext}>{'Start'}</button>
        </section>
      )}
      {level > 0 && (
        <>
          <CodeInput input={input} onInput={setInput} level={level} />
          <section className="buttons">
            {level > 0 && <button className="arrow" onClick={handlePrevious}>{'<'}</button>}
            {!showResult ? (
              <button onClick={handleValidate}>Check</button>
            ) : (
              <button onClick={handleNext}>{won ? 'You won!' : 'Next'}</button>
            )}
            {level < LEVELS.length && <button className="arrow" onClick={handleNext}>{'>'}</button>}
          </section>
          {!won && (
            <button className="help-buton" onClick={handleHelp}>Give me the solution</button>
          )}
        </>
      )}
    </>
  );
}

export default LevelManager;
