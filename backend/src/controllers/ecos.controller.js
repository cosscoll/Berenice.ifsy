import { ECOSScenario } from '../models/ECOSScenario.model.js';
import { ECOSEvaluation } from '../models/ECOSEvaluation.model.js';
import { createEphemeralSession } from '../services/ecos/openaiRealtimeBridge.js';

export async function listScenarios(req, res, next) {
  try {
    const scenarios = await ECOSScenario.find().select('ecos_id titre ctx comp').lean();
    res.json({ scenarios });
  } catch (err) {
    next(err);
  }
}

export async function startECOSSession(req, res, next) {
  try {
    const { scenarioId } = req.params;
    if (!scenarioId) return res.status(400).json({ error: 'scenarioId requis' });

    const scenario = await ECOSScenario.findOne({ ecos_id: scenarioId }).lean();
    if (!scenario) return res.status(404).json({ error: `Scénario introuvable: ${scenarioId}` });

    const session = await createEphemeralSession(scenario);
    res.json({ scenarioId, titre: scenario.titre, session });
  } catch (err) {
    next(err);
  }
}

/**
 * Enregistre le score calculé par l'IA en fin de session — TOUJOURS provisoire
 * (validatedByFormateur = null tant qu'un formateur ne l'a pas relu). Conformité
 * EU AI Act Annexe III : un système d'évaluation IA est "haut risque", la
 * supervision humaine est obligatoire avant toute validation d'ECTS.
 */
export async function submitAIEvaluation(req, res, next) {
  try {
    const { userId, scenarioId, aiScores, transcript } = req.body;
    const aiTotalScore = aiScores.reduce((sum, s) => sum + (s.obtained ? s.pts : 0), 0);

    const evaluation = await ECOSEvaluation.create({
      userId,
      scenarioId,
      aiScores,
      aiTotalScore,
      transcript,
    });

    res.status(201).json({ evaluation, notice: 'Score provisoire — en attente de validation par un formateur.' });
  } catch (err) {
    next(err);
  }
}

/** Validation humaine obligatoire avant que le score ne devienne définitif. */
export async function validateEvaluation(req, res, next) {
  try {
    const { evaluationId } = req.params;
    const { formateurId, finalScore, comment } = req.body;

    const evaluation = await ECOSEvaluation.findByIdAndUpdate(
      evaluationId,
      {
        validatedByFormateur: formateurId,
        validatedAt: new Date(),
        finalScore,
        formateurComment: comment ?? null,
      },
      { new: true },
    );

    if (!evaluation) return res.status(404).json({ error: 'Évaluation introuvable' });
    res.json({ evaluation });
  } catch (err) {
    next(err);
  }
}
