import React, { useEffect, useState } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const [clockName, setClockName] = useState('Clock-0');
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const nameTimerId = window.setInterval(() => {
      setClockName(getRandomName());
    }, 3300);

    const timeTimerId = window.setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(nameTimerId);
      clearInterval(timeTimerId);
    };
  }, []);

  return (
    <div className="App">
      <h1>React clock</h1>

      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    </div>
  );
};
