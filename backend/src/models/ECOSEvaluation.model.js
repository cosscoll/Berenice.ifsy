import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * Résultat d'une session ECOS évaluée par l'avatar IA.
 *
 * Conformité EU AI Act (Annexe III) : un système d'IA qui évalue des résultats
 * d'apprentissage est classé "haut risque". Il est interdit de laisser la note
 * générée par l'IA devenir définitive sans supervision humaine — d'où les champs
 * `validatedByFormateur` / `validatedAt` : tant que validatedByFormateur est null,
 * ce résultat est un score PROVISOIRE, non opposable pour la validation d'ECTS.
 */
const ECOSEvaluationSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    scenarioId: { type: String, required: true }, // ecos_id
    aiScores: [
      {
        id: { type: String, required: true }, // correspond à eval[].id du scénario
        obtained: { type: Boolean, required: true },
        pts: { type: Number, required: true },
      },
    ],
    aiTotalScore: { type: Number, required: true },
    transcript: { type: String }, // transcription texte de la session, pour relecture humaine

    // --- Supervision humaine obligatoire (EU AI Act) ---
    validatedByFormateur: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    validatedAt: { type: Date, default: null },
    formateurComment: { type: String, default: null },
    finalScore: { type: Number, default: null }, // renseigné uniquement après validation humaine
  },
  { timestamps: true },
);

ECOSEvaluationSchema.virtual('isProvisional').get(function () {
  return this.validatedByFormateur === null;
});

export const ECOSEvaluation = mongoose.model('ECOSEvaluation', ECOSEvaluationSchema);
