/**
 * Pont serveur <-> OpenAI Realtime API pour l'avatar ECOS (WebRTC).
 *
 * Pattern OpenAI Realtime (WebRTC) :
 *  1. Le CLIENT (navigateur) crée une RTCPeerConnection et génère une offre SDP.
 *  2. Le SERVEUR (ici) échange une clé API secrète contre un jeton EPHÉMÈRE
 *     (jamais la clé API n'est exposée au navigateur).
 *  3. Le CLIENT envoie son offre SDP directement à OpenAI avec le jeton éphémère
 *     et reçoit la réponse SDP (voir frontend/src/services/webrtc/sdpNegotiation.js).
 *
 * Doc: https://platform.openai.com/docs/guides/realtime-webrtc
 */
import { env } from '../../config/env.config.js';
import { logger } from '../../utils/logger.js';

const OPENAI_SESSIONS_URL = 'https://api.openai.com/v1/realtime/sessions';

/**
 * Crée une session Realtime éphémère configurée pour un scénario ECOS donné
 * (instructions patient, voix, modalités).
 * @param {object} scenario - un cas clinique au format du schéma "ecos_id" du cahier des charges.
 */
export async function createEphemeralSession(scenario) {
  if (!env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY manquant — configurer backend/.env');
  }

  const model = scenario?.model_tier === 'complex'
    ? env.OPENAI_REALTIME_MODEL_COMPLEX
    : env.OPENAI_REALTIME_MODEL_STANDARD;

  const body = {
    model,
    voice: scenario?.patient?.avatar_params?.voice ?? 'alloy',
    // outputModalities: ["text"] si le TTS est géré côté client (TalkingHead), cf. cahier des charges §1
    modalities: ['audio', 'text'],
    instructions: buildPatientPrompt(scenario),
    turn_detection: { type: 'server_vad' }, // active la VAD / barge-in côté serveur OpenAI
  };

  const response = await fetch(OPENAI_SESSIONS_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errText = await response.text();
    logger.error('Échec création session Realtime', { status: response.status, errText });
    throw new Error(`OpenAI Realtime session error: ${response.status}`);
  }

  const session = await response.json();
  // session.client_secret.value = jeton éphémère à transmettre au frontend uniquement
  return session;
}

function buildPatientPrompt(scenario) {
  if (!scenario) return 'Tu es un patient standardisé pour un exercice ECOS.';
  const { ctx, patient } = scenario;
  return [
    `Contexte clinique: ${ctx}`,
    `Tu incarnes le patient ${patient?.nom}.`,
    patient?.prompt,
    "Reste strictement dans le rôle du patient, ne donne jamais le diagnostic à l'étudiant.",
  ].filter(Boolean).join('\n');
}
