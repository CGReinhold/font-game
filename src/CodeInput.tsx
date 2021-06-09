import React from 'react';
import './CodeInput.css';
import { LEVELS } from './Constants';

interface CodeInputProps {
  input: string;
  level: number;
  onInput: (input: string) => void;
  onEnter: () => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ level, input, onInput, onEnter }) => {
  const levelSize = typeof LEVELS[level - 1] === 'string' ? 1 : LEVELS[level - 1].length;

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.split('\n').length > levelSize
     ? e.target.value.replace(/\n+$/, '')
     : e.target.value;
    onInput(value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      onEnter();
    }
  };
  
  const renderLevelResult = (level: string | string[]) => {
    if (typeof level === 'string') {
      return <span key={level}>{level}</span>
    } else {
      return level.map(l => (
        <span key={l}>{l}</span>
      ));
    }
  }

  return (
    <section className="input-container">
      <p className="code-start">
        {`.phrase {`}
      </p>
      <p>
        {LEVELS.slice(0, level - 1).map(renderLevelResult)}
      </p>
      {level < LEVELS.length + 1 && (
        <textarea
          autoFocus
          placeholder="your style"
          value={input}          
          onChange={handleInput}
          onKeyUp={handleKeyUp}
          rows={levelSize}
          
        />
      )}
      <p className="code-end">
        {`}`}
      </p>
    </section>
  );
}

export default CodeInput;
