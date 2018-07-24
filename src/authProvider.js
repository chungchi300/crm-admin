// in src/authProvider.js
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_CHECK,
  AUTH_GET_PERMISSIONS
} from "react-admin";
// import decodeJwt from 'jwt-decode'
import { url } from "config";
export default (type, params) => {
  console.log("the type", type, AUTH_LOGOUT);
  if (type === AUTH_LOGIN) {
    console.log("Auth login");
    const { username, password } = params;
    const request = new Request(url("/membership/login"), {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({ "Content-Type": "application/json" })
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(responseJson => {
        console.log("the response", responseJson);
        // const decodedToken = decodeJwt(token)
        localStorage.setItem("token", responseJson.token);
        console.log("set token", responseJson.token);
        localStorage.setItem("role", "Admin");
        return Promise.resolve();
      });
  }
  if (type === AUTH_LOGOUT) {
    console.log("Auth logout");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    return Promise.resolve();
  }
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  }
  if (type === AUTH_CHECK) {
    console.log("auth check", AUTH_CHECK, localStorage.getItem("token"));
    return Promise.resolve();
  }
  if (type === AUTH_GET_PERMISSIONS) {
    const role = localStorage.getItem("role");
    console.log("Auth permissions", role);
    return role ? Promise.resolve(role) : Promise.reject();
  }
  return Promise.reject("Unkown method");
};
