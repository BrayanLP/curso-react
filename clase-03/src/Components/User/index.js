import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      foto = 'https://avatars1.githubusercontent.com/u/14982190?s=460&v=4',
      title = 'Brayan Laureano Paucar'
    } = this.state;
    return (
      <>
        <div className="card">
          <picture className="card-picture">
            <img src={foto} alt="Foto"></img>
          </picture>
          <div className="card-title">{title}</div>
        </div>
      </>
    );
  }
}

export default User;
