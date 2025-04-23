import axios from 'axios';
import { app } from '@/config';

export const client = axios.create({
  baseURL: app.apiBaseUrl,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});


export const fileClient = axios.create({
  baseURL: app.apiBaseUrl,
  headers: {
    'Content-Type': 'multipart/form-data', // For file uploads
    Accept: 'application/json, application/octet-stream', // Accept both JSON and binary data
  },
  responseType: 'blob', // Ensure binary data is handled properly
});

export function setClientAccessToken(token: string) {
  localStorage.setItem(app.accessTokenStoreKey, token);
  client.defaults.headers.common.authorization = `Bearer ${token}`;
  fileClient.defaults.headers.common.authorization = `Bearer ${token}`;
}

export function removeClientAccessToken() {
  localStorage.removeItem(app.accessTokenStoreKey);
  delete client.defaults.headers.common.authorization;
  delete fileClient.defaults.headers.common.authorization;
}

export function loadAccessToken() {
  const token = localStorage.getItem(app.accessTokenStoreKey);
  setClientAccessToken(token ?? '');
}
