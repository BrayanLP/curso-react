import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import Page1 from '../Page1';
import Page2 from '../Page2';
import Page3 from '../Page3';
import Page3Detail from '../Page3/detail';
import Page404 from '../404';
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
          <li>
            <Link to="page3/clase-04">Detalles</Link>
          </li>
        </ul>
      </header>
      <Router>
        <Page1 path="/" />
        <Page2 path="/page2" />
        <Page3 path="/page3"></Page3>
        <Page3Detail path="/page3/:id"></Page3Detail>
        <Page404 path="*"></Page404>
      </Router>
    </div>
  );
}

export default App;
