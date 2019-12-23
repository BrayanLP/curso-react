import React from 'react';
import Users from './index';

const arrUser = [
  {
    id: 1,
    name: 'Brayan Laureano p',
    cargo: 'Semi senior front end develop',
    status: 'online',
    image: 'https://avatars1.githubusercontent.com/u/14982190?s=460&v=4'
  },
  {
    id: 2,
    name: 'Adrian choquehuanca',
    cargo: '',
    status: 'offline',
    image: 'https://picsum.photos/80/80'
  },
  {
    id: 3,
    name: 'Omar Montoya',
    cargo: '',
    status: 'online',
    image: 'https://picsum.photos/80/80'
  },
  {
    id: 4,
    name: 'Hugo cisneros',
    cargo: '',
    status: 'offline',
    image: 'https://picsum.photos/80/80'
  },
  {
    id: 5,
    name: 'Humberto melendes',
    cargo: '',
    status: 'offline',
    image: 'https://picsum.photos/80/80'
  },
  {
    id: 6,
    name: 'Brian quispe',
    cargo: '',
    status: 'online',
    image: 'https://picsum.photos/80/80'
  }
];
export default ({ users = arrUser }) => (
  <div className="App">
    <div className="cards">
      {users.map((res, index) => (
        <Users key={index + 1} {...res}></Users>
      ))}
    </div>
  </div>
);
