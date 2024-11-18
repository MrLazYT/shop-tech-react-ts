import axios from "axios";
import { IProductDto } from "../types/product";
import { getTokenFromLocalStorage } from "../helper/localStorage.helper";
const urlAPI='https://webapi-shoptech-pv321-hxc4cna7gab9ghhc.westeurope-01.azurewebsites.net/api/';
// const urlAPI='https://localhost:7262/api/';

export const instance = axios.create({
    baseURL: urlAPI,
    // timeout: 5000,
    withCredentials: false, // дефолтне значення
    headers: {
      Authorization: 'Bearer '+getTokenFromLocalStorage()||''
    }
  });




