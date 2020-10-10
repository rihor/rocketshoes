/*
  Utilizando a lib: https://github.com/typicode/json-server
  Para criação de uma API REST fake.
*/
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/rihor/rocketshoes_json_server',
});

export default api;
