import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils, Admin, Resource } from "react-admin";
// console.log('simpleRestProvider', simpleRestProvider)
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  console.log("set token");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
export default simpleRestProvider("http://localhost:9907", httpClient);
