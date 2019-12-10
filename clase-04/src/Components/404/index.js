import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
    setTimeout(() => {
      this.props.navigate('/');
    }, 1000 * 20);
  }
  render() {
    return (
      <>
        <h1>Page not Found.</h1>
      </>
    );
  }
}
