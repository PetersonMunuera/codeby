import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://frabjous-belekoy-15acef.netlify.app:3000'
});