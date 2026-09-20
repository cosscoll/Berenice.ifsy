/**
 * Négociation SDP côté navigateur avec OpenAI Realtime (WebRTC).
 * Le jeton éphémère vient du backend (openaiRealtimeBridge.js) — jamais la clé API
 * n'est présente côté client.
 */
const OPENAI_REALTIME_URL = 'https://api.openai.com/v1/realtime';

export async function negotiateRealtimeConnection({ peerConnection, ephemeralToken, model }) {
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);

  const response = await fetch(`${OPENAI_REALTIME_URL}?model=${encodeURIComponent(model)}`, {
    method: 'POST',
    body: offer.sdp,
    headers: {
      Authorization: `Bearer ${ephemeralToken}`,
      'Content-Type': 'application/sdp',
    },
  });

  if (!response.ok) {
    throw new Error(`Négociation SDP échouée: ${response.status}`);
  }

  const answerSdp = await response.text();
  await peerConnection.setRemoteDescription({ type: 'answer', sdp: answerSdp });
  return peerConnection;
}
