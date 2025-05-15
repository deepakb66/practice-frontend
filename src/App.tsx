import React from 'react';
import logo from './logo.svg';
import './App.css';

const Component = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Practice React here!</p>
    </div>
  );
}
// This is a functional component in React

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Component />
      </header>
    </div>
  );
}

export default App;
