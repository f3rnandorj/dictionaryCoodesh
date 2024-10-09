import axios from 'axios';

export const BASE_URL = 'https://api.dictionaryapi.dev/';
export const api = axios.create({
  baseURL: BASE_URL,
});
