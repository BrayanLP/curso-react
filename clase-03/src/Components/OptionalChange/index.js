import React, { Component } from "react";
import { oc } from "ts-optchain";
const user = {
  login: "BrayanLP",
  id: 14982190,
  node_id: "MDQ6VXNlcjE0OTgyMTkw",
  avatar_url: "https://avatars2.githubusercontent.com/u/14982190?v=4",
  gravatar_id: "",
  repositorioss: [],
  url: "https://api.github.com/users/BrayanLP",
  html_url: "https://github.com/BrayanLP",
  followers_url: "https://api.github.com/users/BrayanLP/followers",
  following_url: "https://api.github.com/users/BrayanLP/following{/other_user}",
  gists_url: "https://api.github.com/users/BrayanLP/gists{/gist_id}",
  starred_url: "https://api.github.com/users/BrayanLP/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/BrayanLP/subscriptions",
  organizations_url: "https://api.github.com/users/BrayanLP/orgs",
  repos_url: "https://api.github.com/users/BrayanLP/repos",
  events_url: "https://api.github.com/users/BrayanLP/events{/privacy}",
  received_events_url: "https://api.github.com/users/BrayanLP/received_events",
  type: "User",
  name: "Omar Montoya",
  site_admin: false,
  company: "Grupo Aizen ",
  blog: "htttp://brayanlp.com",
  location: "Perú",
  email: null,
  hireable: null,
  bio: "I'm Semi Senior Front End Developer",
  public_repos: 53,
  public_gists: 11,
  followers: 5,
  following: 11,
  created_at: "2015-10-05T16:40:23Z",
  updated_at: "2019-12-05T13:15:23Z"
};
class OptionalChange extends Component {
  render() {
    const name = oc(user).name("undefined");
    const repos = oc(user).repositorios([]);
    return (
      <>
        <h1>Demostrando Optional Change</h1>
        <p>mi nombre es: {name}</p>
        <p>mis repositorios: {repos}</p>
      </>
    );
  }
}

export default OptionalChange;
