import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
const User = styled(Link)`
  padding: 2rem 1rem;
  min-width: 200px;
  min-height: 200px;
  margin: 0.5rem;
  border: 1px solid white;
  border-radius: 1rem;
  // background: white;
  transition: 0.4s all;
  text-decoration: none;
  color: white;
  &:hover {
    border: 1px solid white;
    background: white;
    color: #40407a;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
  .card-header .status {
    // max-width: 100px;
    height: 20px;
    background: #4cd137;
    border-radius: 1rem;
    padding: 0 1rem;
    margin: 0 auto;
  }
  .card-header {
    .status {
      &.online {
        width: 40px;
        background: #4cd137;
      }
      &.offline {
        width: 100px;
        background: #e84118;
      }
    }
  }
  .card-header img {
    border-radius: 50%;
  }
  .card-body {
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }
  }
`;
export default ({ image, status, name, cargo, id }) => (
  <User className="card card-user" to={`/usuario/${id}`}>
    <div className="card-header">
      <img src={image || ''} width="100" alt={name}></img>
      {status === 'online' ? (
        <div className="status online">Activo</div>
      ) : (
        <div className="status offline">Desconectado</div>
      )}
    </div>
    <div className="card-body">
      <h2>{name}</h2>
      <p>{cargo}</p>
    </div>
  </User>
);
