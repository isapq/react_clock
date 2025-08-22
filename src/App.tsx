import React, { useEffect, useState } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
  time: string;
};

export class App extends React.Component<{}, State> {
  private nameTimerId?: number;

  private timeTimerId?: number;

  constructor(props: {}) {
    super(props);

    this.state = {
      hasClock: true,
      clockName: 'Clock-0',
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount(): void {
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.timeTimerId = window.setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.nameTimerId) {
      clearInterval(this.nameTimerId);
    }

    if (this.timeTimerId) {
      clearInterval(this.timeTimerId);
    }
  }

  render(): React.ReactNode {
    const { hasClock, clockName, time } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>
            {' time is '}
            <span className="Clock__time">{time}</span>
          </div>
        )}
      </div>
    );
  }
}
