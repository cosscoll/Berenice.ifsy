import { apiClient } from './apiClient.js';

export async function fetchScenarios() {
  const { data } = await apiClient.get('/ecos/scenarios');
  return data.scenarios;
}
