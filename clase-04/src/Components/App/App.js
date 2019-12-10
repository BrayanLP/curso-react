import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import Page1 from '../Page1';
import Page2 from '../Page2';
import Page3 from '../Page3';

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="page2">Nosotros</Link>
          </li>
          <li>
            <Link to="page3">Servicios</Link>
          </li>
        </ul>
      </header>
      <Router>
        <Page1 path="/" />
        <Page2 path="/page2" />
        <Page3 path="/page3" />
      </Router>
    </div>
  );
}

export default App;
