import React, { Component } from 'react';
import styled from '@emotion/styled';

const UserDetail = styled.div`
  background: white;
  max-width: 800px;
  min-width: 600px;
  border-radius: 1rem;
  padding: 1rem;
  color: #40407a;
  .card-header {
    img {
      border-radius: 50%;
    }
    .status {
      // max-width: 100px;
      height: 20px;
      background: #4cd137;
      border-radius: 1rem;
      padding: 0 1rem;
      margin: 0 auto;
      &.online {
        width: 40px;
        background: #4cd137;
      }
      &.offline {
        width: 100px;
        background: #e84118;
      }
    }
    h2 {
      font-size: 16px;
    }
    h4 {
      font-size: 13px;
      margin: 0;
    }
  }
  .card-body {
    ul.inline {
      margin: 0;
      padding: 0;
      &.contact {
        margin-bottom: 2rem;
        li {
          a {
            width: 40px;
            height: 40px;
            display: block;
            background: red;
            border-radius: 50%;
            margin: 0 0.5rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
          }
          &:nth-child(1n) {
            a {
              background: #7bed9f;
              color: #5db579;
            }
          }
          &:nth-child(2n) {
            a {
              background: #eccc68;
              color: #c0a345;
            }
          }
          &:nth-child(3n) {
            a {
              background: #747d8c;
              color: #505761;
            }
          }
        }
      }
      margin: 0;
      li {
        display: inline-block;
      }
    }
    ul.roles {
      margin: 0 auto;
      padding: 0;
      list-style: none;
      max-width: 350px;

      li {
        border-bottom: 1px solid #dfe4ea;
        text-align: left;
        padding: 0.5rem;
        position: relative;
        span {
          font-weight: bold;
          font-size: 12px;
        }
        p {
          margin: 0;
        }
        &:before {
          content: 'check_box';
          font-family: 'Material Icons';
          position: absolute;
          left: -35px;
          top: 8px;
          font-size: 30px;
        }
      }
    }
  }
`;
class UsuariosDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <UserDetail className="card card-user-detail">
          <div className="card-header">
            <img
              src="https://avatars1.githubusercontent.com/u/14982190?s=460&v=4"
              width="100"
              alt={'name'}
            ></img>
            {true ? (
              <div className="status online">Activo</div>
            ) : (
              <div className="status offline">Desconectado</div>
            )}
          </div>
          <div className="card-body">
            <h2>Brayan Laureano </h2>
            <h4>brayanlp</h4>
            <p>Agente Teleoperador Soporte 1</p>
            <ul className="inline contact">
              <li>
                <a href="/">
                  <i className="material-icons">phone</i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="material-icons">email</i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="material-icons">lock</i>
                </a>
              </li>
            </ul>
            <ul className="roles">
              {new Array(7).fill({}).map((res, index) => (
                <li key={index + 1}>
                  <span>03/06/18</span>
                  <p>Rol encargado de consultar el módulo de Ventas.</p>
                </li>
              ))}
            </ul>
          </div>
        </UserDetail>
      </div>
    );
  }
}

export default UsuariosDetail;
