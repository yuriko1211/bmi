import React, { FC, useState } from 'react';
import './App.css';

const App: FC = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState('');

  const displayHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(e.target.value));
  };

  const displayWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(e.target.value));
  };

  const calcBmi = () => {
    const result = Math.round((weight / (height / 100) ** 2) * 10) / 10;
    setBmi(String(result));
  };

  return (
    <div className="container">
      <h1 className="ui header">BMI計算ツール</h1>
      <form className="ui form">
        <div className="input field">
          <label htmlFor="height">
            身長
            <input type="text" id="height" onChange={displayHeight} />
          </label>
        </div>
        <div className="input field">
          <label htmlFor="weight">
            体重
            <input type="text" id="weight" onChange={displayWeight} />
          </label>
        </div>
        <div className="button">
          <button
            className="ui button"
            type="button"
            name="calc-bmi"
            onClick={calcBmi}
          >
            計算
          </button>
        </div>
      </form>
      <div className="display">BMI:{bmi}</div>
    </div>
  );
};

export default App;
