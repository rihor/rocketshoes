/*
  Utilizando a lib: https://github.com/typicode/json-server
  Para criação de uma API REST fake.
*/
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
