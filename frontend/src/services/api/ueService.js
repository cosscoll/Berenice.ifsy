import { apiClient } from './apiClient.js';

export async function fetchUEs(bloc) {
  const { data } = await apiClient.get('/ue', { params: bloc ? { bloc } : {} });
  return data.ues;
}

export async function fetchUE(code) {
  const { data } = await apiClient.get(`/ue/${encodeURIComponent(code)}`);
  return data;
}
