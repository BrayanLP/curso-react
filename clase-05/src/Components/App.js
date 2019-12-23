import React from 'react';
import './App.css';
import Nav from './Nav/index';
import { Router } from '@reach/router';
import Home from '../Views/Home';
import Usuarios from '../Views/Usuarios';
import UsuariosDetail from '../Views/UsuariosDetail';
function App() {
  return (
    <>
      <Nav></Nav>
      <Router>
        <Home path="/"></Home>
        <Usuarios path="/usuarios"></Usuarios>
        <UsuariosDetail path="/usuario/:id"></UsuariosDetail>
      </Router>
    </>
  );
}

export default App;
