import React from 'react';
import './App.css';
import DrumKit from './components/DrumKit/DrumKit.js';

class App extends React.Component {
  render() {
    return (
        <div className = "App">
          <h1> Drums! </h1>
          <DrumKit />
        </div>
    );
  }
}

export default App;
