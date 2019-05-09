import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HomePage />
      </div>
    );
  }
}

export default App;
