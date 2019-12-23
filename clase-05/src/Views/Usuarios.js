import React, { Component } from 'react';
import UserContainer from '../Components/Users/Container';
class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <UserContainer></UserContainer>
      </>
    );
  }
}

export default Usuarios;
