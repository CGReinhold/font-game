import React from 'react';
import './CodeInput.css';
import { LEVELS } from './Contants';

interface CodeInputProps {
  input: string;
  level: number;
  onInput: (input: string) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ level, input, onInput }) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInput(e.target.value);
  }

  return (
    <section className="input-container">
      <p className="code-start">
        {`.phrase {`}
      </p>
      <p>
        {LEVELS.slice(0, level - 1).map(level => (
          <span key={level}>{level}</span>
        ))}
      </p>
      {level < LEVELS.length + 1 && (
        <input autoFocus placeholder="your style" value={input} onChange={handleInput} />
      )}
      <p className="code-end">
        {`}`}
      </p>
    </section>
  );
}

export default CodeInput;
