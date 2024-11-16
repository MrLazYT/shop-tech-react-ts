import axios from "axios";
import { IProductDto } from "../types/product";

export const instance = axios.create({
    baseURL: 'https://webapi-shoptech-pv321-hxc4cna7gab9ghhc.westeurope-01.azurewebsites.net/api/',
    // timeout: 5000,
    withCredentials: false, // дефолтне значення
    // headers: {'Authorization':  'Bearer'+'foobar'}
  });




