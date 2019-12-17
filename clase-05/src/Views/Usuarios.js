import React, { Component } from 'react';
class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="cards">
          {new Array(10).fill({}).map((res, key) => (
            <div className="card card-user" key={key + 1}>
              <div className="card-header">
                <img
                  src={
                    res.image ||
                    'https://avatars1.githubusercontent.com/u/14982190?s=460&v=4'
                  }
                ></img>
                <div className="status"></div>
              </div>
              <div className="card-body">
                <h2>Brayan Laureano Paucar</h2>
                <p>Semi senior front end develop</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Usuarios;
