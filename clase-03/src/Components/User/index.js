import React, { Component } from "react";
import axios from "axios";
const API = "https://api.github.com/users/brayanlp";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLoading: true
    };
  }

  componentDidMount() {
    this.user();
  }
  user = async () => {
    const user = await axios.get(API).then(result => result.data);
    this.setState({ user, isLoading: false });
  };
  render() {
    const {
      user: { avatar_url: foto, name: title },
      isLoading
    } = this.state;
    console.log(this.state.user);
    return (
      <>
        {isLoading ? (
          <p>Cargando ....</p>
        ) : (
          <div className="card">
            <picture className="card-picture">
              <img src={foto} alt="Foto"></img>
            </picture>
            <div className="card-title">{title}</div>
          </div>
        )}
      </>
    );
  }
}

export default User;
