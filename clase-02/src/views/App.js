import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  state = {
    user: {
      name: 'Pedrito'
    },
    count: 0
  };

  getUser = () => {
    const random = Math.random();
    this.setState({ count: random });
    // console.log(random);
  };
  componentWillMount() {
    console.log('componentWillMount: ME ESTOY EJECUTANDO AL INICIO');
  }
  componentDidMount() {
    console.log('componentDidMount: ME ESTOY EJECUTANDO DESPUES');
  }
  componentWillReceiveProps(state, pro) {
    console.log('TCL: App -> componentWillReceiveProps -> pro', pro);
    console.log('TCL: App -> componentWillReceiveProps -> state', state);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount:  ME EJECUTO CUANDO ME VOY');
  }

  render() {
    const {
      count,
      user: { name }
    } = this.state;
    console.log('TCL: App -> render -> name', name);
    // console.log('TCL: App -> render -> user', user);
    // console.log('TCL: App -> render -> count', count);
    return (
      <>
        <button onClick={() => this.getUser()}>Numero Aleatorio</button>
        <ul>
          <li> 1</li>
          <li> 2</li>
          <li> 1</li>
        </ul>
        <p> lorem im[s</p>
      </>
      // <div className="App">
      //   <h1>Conociendo el ciclo de vida</h1>
      // </div>
    );
  }
}

export default App;
