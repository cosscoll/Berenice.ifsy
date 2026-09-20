import { negotiateRealtimeConnection } from './sdpNegotiation.js';
import { attachMicrophone, attachRemoteAudio } from './audioStreamManager.js';
import { apiClient } from '../api/apiClient.js';

/**
 * Point d'entrée client pour démarrer une session avatar ECOS de bout en bout :
 * 1. Récupère un jeton éphémère + config de session depuis le backend.
 * 2. Ouvre la RTCPeerConnection, attache le micro.
 * 3. Négocie le SDP avec OpenAI Realtime.
 * 4. Ouvre un data channel pour les événements texte (transcriptions, function calls).
 */
export async function startECOSRealtimeSession({ scenarioId, audioEl }) {
  const { data } = await apiClient.post(`/ecos/sessions/${scenarioId ?? ''}`);
  const { session } = data;
  const ephemeralToken = session.client_secret.value;
  const model = session.model;

  const peerConnection = new RTCPeerConnection();
  attachRemoteAudio(peerConnection, audioEl);
  await attachMicrophone(peerConnection);

  const dataChannel = peerConnection.createDataChannel('oai-events');

  await negotiateRealtimeConnection({ peerConnection, ephemeralToken, model });

  return { peerConnection, dataChannel };
}

export function stopECOSRealtimeSession({ peerConnection, dataChannel }) {
  dataChannel?.close();
  peerConnection?.getSenders().forEach((s) => s.track && s.track.stop());
  peerConnection?.close();
}
