import React, { FC, useState } from 'react';
import './App.css';

const App: FC = () => {
  const [value, setValue] = useState('');

  const displayValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <div className="input">
        <input type="text" onChange={displayValue} />
      </div>
      <div className="display">{value}</div>
    </div>
  );
};

export default App;
