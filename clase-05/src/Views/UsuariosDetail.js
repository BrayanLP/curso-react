import React, { Component } from 'react';
import styled from '@emotion/styled';
import Axios from 'axios';
const API =
  'https://security-backoffice.yachay.pe/api/v1/users?includes=position.roles&offset=0&limit=all&sort=-created';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiYWNrb2ZmaWNlIiwic2NvcGVzIjp7Im1vZHVsZS1zYWxlcyI6eyJzYWxlcy1zdWJzY3JpcHRpb25zIjpbImxpc3QiLCJnZXQiLCJkZWxldGUiLCJ1cGRhdGUiLCJjcmVhdGUiLCJtb2R1bGUiXSwic2FsZXMtY29udGFjdHMiOlsiZ2V0IiwidXBkYXRlIiwiZGVsZXRlIiwiY3JlYXRlIiwibGlzdCJdLCJzYWxlcy1hZGRyZXNzIjpbImRlbGV0ZSIsInVwZGF0ZSIsImxpc3QiLCJnZXQiLCJjcmVhdGUiXSwic2FsZXMtb3JkZXJzIjpbImxpc3QiLCJ1cGRhdGUiLCJnZXQiLCJkZWxldGUiLCJjcmVhdGUiLCJtb2R1bGUiXSwic2FsZXMtY3VzdG9tZXJzIjpbImxpc3QiLCJjcmVhdGUiLCJ1cGRhdGUiLCJkZWxldGUiLCJnZXQiLCJtb2R1bGUiXX0sIm1vZHVsZS1wb3N0dmVudGEiOnsicG9zdHZlbnRhLWluZGljYXRvcnMiOlsibGlzdCIsIm1vZHVsZSJdLCJwb3N0dmVudGEtcmVwb3J0cyI6WyJsaXN0IiwidXBkYXRlIiwiY3JlYXRlIiwibW9kdWxlIl0sInBvc3R2ZW50YS1tYWludGVuYW5jZXMiOlsibGlzdCIsInVwZGF0ZSIsImRlbGV0ZSIsImNyZWF0ZSIsIm1vZHVsZSJdfSwibW9kdWxlLWVsZWN0cm9uaWNmYWN0Ijp7ImViaWxsaW5nLXBheW1lbnRkb2NzIjpbIm1vZHVsZSIsImdldCJdLCJlYmlsbGluZy1zdW1tYXJpZXMiOlsibW9kdWxlIl19LCJtb2R1bGUtcHJldmVudGEiOnsicHJldmVudGEtbWFpbnRlbmFuY2VzIjpbImxpc3QiLCJkZWxldGUiLCJjcmVhdGUiLCJ1cGRhdGUiLCJtb2R1bGUiXSwicHJldmVudGEtcmVwb3J0cyI6WyJsaXN0IiwidXBkYXRlIiwiY3JlYXRlIiwibW9kdWxlIl0sInByZXZlbnRhLWluZGljYXRvcnMiOlsibGlzdCIsIm1vZHVsZSJdfSwibW9kdWxlLXNpdGVzIjp7fSwibW9kdWxlLXNlY3VyaXR5Ijp7InNlY3VyaXR5LXJvbGVzIjpbImxpc3QiLCJnZXQiLCJkZWxldGUiLCJ1cGRhdGUiLCJjcmVhdGUiLCJtb2R1bGUiXSwic2VjdXJpdHktYWN0aW9ucyI6WyJsaXN0IiwiZ2V0IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIiwibW9kdWxlIl0sInNlY3VyaXR5LXBvc2l0aW9ucyI6WyJsaXN0IiwiZ2V0IiwiZGVsZXRlIiwiY3JlYXRlIiwidXBkYXRlIiwibW9kdWxlIl0sInNlY3VyaXR5LXVzZXJzIjpbImxpc3QiLCJ1cGRhdGUiLCJjcmVhdGUiLCJnZXQiLCJkZWxldGUiLCJtb2R1bGUiXSwic2VjdXJpdHktcGVybWlzc2lvbnMiOlsibGlzdCIsImdldCIsImRlbGV0ZSIsInVwZGF0ZSIsImNyZWF0ZSIsIm1vZHVsZSJdLCJzZWN1cml0eS1tb2R1bGVzIjpbImxpc3QiLCJjcmVhdGUiLCJkZWxldGUiLCJnZXQiLCJ1cGRhdGUiLCJtb2R1bGUiXX0sIm1vZHVsZS1tYXJrZXRpbmciOnsibWFya2V0aW5nLW9mZmVycyI6WyJ1cGRhdGUiLCJnZXQiLCJjcmVhdGUiLCJkZWxldGUiLCJsaXN0IiwibW9kdWxlIl0sIm1hcmtldGluZy1wcm9tb3Rpb25hbGNvZGVzIjpbImxpc3QiLCJnZXQiLCJjcmVhdGUiLCJkZWxldGUiLCJ1cGRhdGUiLCJtb2R1bGUiXSwibWFya2V0aW5nLXByb2R1Y3QtdHJhbnNsYXRlIjpbImdldCIsImRlbGV0ZSIsInVwZGF0ZSIsImNyZWF0ZSIsImxpc3QiXSwibWFya2V0aW5nLXByb21vdGlvbmFsY29kZS10cmFuc2xhdGUiOlsiZ2V0IiwiZGVsZXRlIiwibGlzdCIsImNyZWF0ZSIsInVwZGF0ZSJdLCJtYXJrZXRpbmctcHJvZHVjdHMiOlsibGlzdCIsInVwZGF0ZSIsImdldCIsImNyZWF0ZSIsImRlbGV0ZSIsIm1vZHVsZSJdLCJtYXJrZXRpbmctY3VycmVuY2llcyI6WyJsaXN0IiwidXBkYXRlIiwiZ2V0IiwiZGVsZXRlIiwiY3JlYXRlIl0sIm1hcmtldGluZy1wcm9tb3Rpb25hbGNvZGUtdXNlIjpbImxpc3QiLCJnZXQiXSwibWFya2V0aW5nLW9mZmVyLXRyYW5zbGF0ZSI6WyJnZXQiLCJkZWxldGUiLCJ1cGRhdGUiLCJjcmVhdGUiLCJsaXN0Il0sIm1hcmtldGluZy1vcGVyYXRpb25zIjpbImdldCIsImRlbGV0ZSIsInVwZGF0ZSIsImNyZWF0ZSIsImxpc3QiXSwibWFya2V0aW5nLXBlcmlvZHMiOlsiZ2V0IiwiZGVsZXRlIiwibGlzdCIsImNyZWF0ZSIsInVwZGF0ZSJdLCJtYXJrZXRpbmctcGVyaW9kaWNpdGllcyI6WyJjcmVhdGUiLCJsaXN0IiwiZ2V0IiwidXBkYXRlIiwiZGVsZXRlIl0sIm1hcmtldGluZy1wcm9kdWN0LWNvdW50cmllcyI6WyJkZWxldGUiLCJnZXQiLCJsaXN0IiwiY3JlYXRlIiwidXBkYXRlIl0sIm1hcmtldGluZy1wYWNrYWdlLXRyYW5zbGF0ZSI6WyJkZWxldGUiLCJsaXN0IiwiY3JlYXRlIiwiZ2V0IiwidXBkYXRlIl0sIm1hcmtldGluZy1wYWNrYWdlcyI6WyJsaXN0IiwiZ2V0IiwidXBkYXRlIiwiZGVsZXRlIiwiY3JlYXRlIiwibW9kdWxlIl0sIm1hcmtldGluZy1wcm9kdWN0LXByaWNlcyI6WyJnZXQiLCJ1cGRhdGUiLCJsaXN0IiwiZGVsZXRlIiwiY3JlYXRlIl19LCJtb2R1bGUtY2hhcmdlcyI6eyJjaGFyZ2UtcGF5c3RhdGlvbnMiOlsiY3JlYXRlIiwibGlzdCIsImRlbGV0ZSIsImdldCIsInVwZGF0ZSIsIm1vZHVsZSJdLCJjaGFyZ2UtZXhjaGFuZ2UiOlsiY3JlYXRlIiwibGlzdCIsInVwZGF0ZSIsImdldCIsIm1vZHVsZSJdLCJjaGFyZ2UtbWFpbmNoYXJnZXMiOlsibGlzdCIsIm1vZHVsZSIsImdldCIsImNyZWF0ZSJdLCJjaGFyZ2UtY2hhcmdlcyI6WyJsaXN0IiwiY3JlYXRlIiwiZGVsZXRlIl19LCJtb2R1bGUtcmVwb3J0cyI6eyJyZXBvcnQtY29tcGFuaWVzIjpbIm1vZHVsZSJdLCJyZXBvcnRzLXJlcG9ydCI6WyJtb2R1bGUiXX0sIm1vZHVsZS1pbmRpY2F0b3JzIjp7ImluZGljYXRvcnMteWFjaGF5LW9ubGluZSI6WyJtb2R1bGUiXX0sIm1vZHVsZS1wYXltZW50cyI6e30sIm1vZHVsZS1jcGFuZWwiOnsiY3BhbmVsLWNwYW5lbHMiOlsibGlzdCIsInVwZGF0ZSIsImNyZWF0ZSIsImRlbGV0ZSIsImdldCIsIm1vZHVsZSJdLCJjcGFuZWwtb3duZXJzIjpbImNyZWF0ZSIsInVwZGF0ZSIsImRlbGV0ZSIsImxpc3QiLCJnZXQiXSwiY3BhbmVsLWluZGljYXRvcnMiOlsiZ2V0IiwibGlzdCIsIm1vZHVsZSJdLCJjcGFuZWwtY2x1c3RlcnMiOlsidXBkYXRlIiwiZGVsZXRlIiwiY3JlYXRlIiwiZ2V0IiwibGlzdCIsIm1vZHVsZSJdLCJjcGFuZWwtcmVhc29ucyI6WyJkZWxldGUiLCJ1cGRhdGUiLCJnZXQiLCJsaXN0IiwiY3JlYXRlIl0sImNwYW5lbC1zdGF0ZXMiOlsiZ2V0IiwiZGVsZXRlIiwidXBkYXRlIiwibGlzdCIsImNyZWF0ZSJdLCJjcGFuZWwtbG9ncyI6WyJsaXN0IiwibW9kdWxlIl0sImNwYW5lbC1wYWNrYWdlcyI6WyJsaXN0IiwidXBkYXRlIiwiY3JlYXRlIiwiZGVsZXRlIiwiZ2V0IiwibW9kdWxlIl0sImNwYW5lbC1hY2NvdW50cyI6WyJsaXN0IiwidXBkYXRlIiwiY3JlYXRlIiwiZGVsZXRlIiwiZ2V0Iiwic3luY3VwYWNjb3VudCIsInN1c3BlbmRvcmFjdGl2ZSIsImNoYW5nZXBsYW4iLCJjaGFuZ2VxdW90YSIsImNoYW5nZXBhc3N3b3JkYWNjb3VudCIsImVkaXRhY2NvdW50IiwibW9kdWxlIl0sImNwYW5lbC1zdGF0dXMiOlsidXBkYXRlIiwiZGVsZXRlIiwiZ2V0IiwiY3JlYXRlIiwibGlzdCJdfSwibW9kdWxlLWJpbGxpbmciOnsiYmlsbGluZy1kZWJpdG5vdGVzIjpbImxpc3QiLCJnZXQiLCJjcmVhdGUiLCJtb2R1bGUiXSwiYmlsbGluZy1wYXltZW50ZG9jcyI6WyJsaXN0IiwiY3JlYXRlIiwiZ2V0IiwibW9kdWxlIl0sImJpbGxpbmctcGh5c2ljYWxlbWlzc2lvbnMiOlsibGlzdCIsImdldCIsImNyZWF0ZSJdLCJiaWxsaW5nLWNyZWRpdG5vdGVzIjpbImdldCIsImNyZWF0ZSIsImxpc3QiLCJtb2R1bGUiXSwiYmlsbGluZy1lbWlzc2lvbnN0YXRpb25zIjpbInVwZGF0ZSIsImxpc3QiLCJkZWxldGUiLCJjcmVhdGUiLCJnZXQiLCJtb2R1bGUiXSwiYmlsbGluZy1jb3JyZWxhdGl2ZXMiOlsibGlzdCIsImRlbGV0ZSIsInVwZGF0ZSIsImNyZWF0ZSIsImdldCIsIm1vZHVsZSJdfSwibW9kdWxlLWludGVyYWN0aW9ucyI6eyJpbnRlcmFjdGlvbnMtcmVwb3J0cyI6WyJnZXQiLCJsaXN0Il0sImludGVyYWN0aW9uLW1haW50ZW5hbmNlIjpbImxpc3QiLCJjcmVhdGUiLCJ1cGRhdGUiLCJkZWxldGUiLCJnZXQiXSwiaW50ZXJhY3Rpb24taW50ZXJhY3Rpb25zIjpbImRlbGV0ZSIsInVwZGF0ZSIsImNyZWF0ZSIsImdldCIsImxpc3QiXX0sIm1vZHVsZS1kb21haW5zIjp7ImRvbWFpbi10bGRzIjpbImxpc3QiLCJnZXQiLCJkZWxldGUiLCJ1cGRhdGUiLCJjcmVhdGUiLCJtb2R1bGUiXSwiZG9tYWluLXNsZHMiOlsiY3JlYXRlIiwibGlzdCIsImRlbGV0ZSIsInVwZGF0ZSIsImdldCIsIm1vZHVsZSJdLCJkb21haW4tZG9tYWlucyI6WyJsaXN0IiwiZGVsZXRlIiwiZ2V0IiwidXBkYXRlIiwiY3JlYXRlIiwic3VzcGVuZG9yYWN0aXZlIiwibW9kdWxlIl0sImRvbWFpbi1jb250YWN0dHlwZXMiOlsibGlzdCJdLCJkb21haW4tb3duZXJzIjpbImxpc3QiXSwiZG9tYWluLWRuc3JlY29yZHR5cGVzIjpbImxpc3QiXSwiZG9tYWluLXByb3ZpZGVycyI6WyJsaXN0IiwiY3JlYXRlIiwidXBkYXRlIiwiZ2V0IiwiZGVsZXRlIiwibW9kdWxlIl0sImRvbWFpbi1yZWFzb25zIjpbImRlbGV0ZSIsImNyZWF0ZSIsInVwZGF0ZSIsImxpc3QiLCJnZXQiLCJtb2R1bGUiXSwiZG9tYWluLWxvZ3MiOlsibGlzdCIsImdldCIsIm1vZHVsZSJdLCJkb21haW4tc3RhdGVzIjpbImxpc3QiXSwiZG9tYWluLWNvbXBhbmllcyI6WyJsaXN0Il0sImRvbWFpbi1zdWJvcmRpbmF0ZWRucyI6WyJsaXN0IiwiY3JlYXRlIiwiZGVsZXRlIiwiZ2V0IiwidXBkYXRlIiwibW9kdWxlIl19fSwidXNlciI6eyJ1c2VybmFtZSI6ImFkbWluIiwic3RhdHVzIjoidmFsaWRhdGVkIiwiZmlyc3ROYW1lIjoiQWRtaW5pc3RyYWRvciIsImxhc3ROYW1lIjoiQmFja29mZmljZSIsImVtYWlsIjoiYWRtaW5AcmNwLnBlIiwiaWQiOiJhZjNmNzY5NC03ZTdlLTRiMjQtYjVlMy0zMWJmYTVlOTFjZDgifSwiZXhwIjoxNTc3MjI2NzAyLCJpYXQiOjE1NzcxNDAzMDJ9.l1q67fiu3tqLdBpg7GZRB5SElqZuhsrmGlJ3GU8bD4s';
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
  componentDidMount() {
    const { id } = this.props;
    this.getUSerDetail(id);
    // console.log('componentDidMount: ', id);
  }
  getUser = async () => {
    const users = await Axios.get(API, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.data);
    console.log();
    return users;
    // console.log(users);
    // this.setState({ users });
  };
  getUSerDetail = async id => {
    const listsUsers = await this.getUser();
    const detail = listsUsers.results.filter(val => val.id === id);
    return this.setState({ detail: detail[0] });
  };
  render() {
    console.log('userDetail: ', this.state);
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
