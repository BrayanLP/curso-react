import React, { Component } from 'react';
import { Link } from '@reach/router';
import './style.css';
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/usuarios">usuarios</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Nav;
