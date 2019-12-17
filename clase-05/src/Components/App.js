import React from 'react';
import './App.css';
import Nav from './Nav/index';
import { Router } from '@reach/router';
import Home from '../Views/Home';
import Usuarios from '../Views/Usuarios';
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Router>
        <Home path="/"></Home>
        <Usuarios path="/usuarios"></Usuarios>
      </Router>
    </div>
  );
}

export default App;
