/**
 * Gestion du flux micro local + piste audio distante (voix du patient ECOS).
 * La VAD/barge-in serveur est activée côté OpenAI (turn_detection: server_vad,
 * cf. backend/src/services/ecos/openaiRealtimeBridge.js) ; ce module ne fait que
 * le branchement des pistes WebRTC.
 */
export async function attachMicrophone(peerConnection) {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  stream.getTracks().forEach((track) => peerConnection.addTrack(track, stream));
  return stream;
}

/** Branche la piste audio distante sur un élément <audio> pour la lecture. */
export function attachRemoteAudio(peerConnection, audioEl) {
  peerConnection.ontrack = (event) => {
    if (audioEl) audioEl.srcObject = event.streams[0];
  };
}
