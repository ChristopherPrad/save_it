import axios from "axios";
import Project from "./Project";

export const register = newUser => {
  return axios
    .post("http://localhost:3001/users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(res => {
      console.log("Registered!");
    });
};
export const login = user => {
  return axios
    .post("http://localhost:3001/users/login", {
      email: user.email,
      password: user.password
    })
    .then(res => {
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch(err => {
      console.log("coucou");
      console.log(err);
    });
};

export const all = () => {
  return axios
    .get("http://localhost:3001/projects/all")
    .then(response => {
      console.log(response);
    })
    .catch(err => console.log(err));
};
