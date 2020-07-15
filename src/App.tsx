import React, { FC, useState } from 'react';
import './App.css';

const App: FC = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');

  const displayHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
  };

  const displayWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };

  const calcBmi = () => {
    const result =
      Math.round((Number(weight) / (Number(height) / 100) ** 2) * 10) / 10;
    setBmi(String(result));
  };

  return (
    <div className="container">
      <div className="input">
        <input type="text" onChange={displayHeight} />
      </div>
      <div className="input">
        <input type="text" onChange={displayWeight} />
      </div>
      <div className="button">
        <button type="button" name="calc-bmi" onClick={calcBmi}>
          計算
        </button>
      </div>
      <div className="display">BMI:{bmi}</div>
    </div>
  );
};

export default App;
