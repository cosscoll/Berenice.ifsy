import mongoose from 'mongoose';

const { Schema } = mongoose;

const ECOSScenarioSchema = new Schema(
  {
    ecos_id: { type: String, required: true, unique: true },
    titre: { type: String, required: true },
    comp: [{ type: Number }], // ids de compétences infirmières évaluées
    ctx: { type: String, required: true },
    // "standard" -> gpt-realtime-2.1-mini (économique) ; "complex" -> gpt-realtime-2.1
    // (scénarios à forte charge relationnelle/psychiatrique). Voir openaiRealtimeBridge.js.
    model_tier: { type: String, enum: ['standard', 'complex'], default: 'standard' },
    patient: {
      nom: { type: String, required: true },
      prompt: { type: String, required: true },
      avatar_params: {
        mood: { type: String },
        voice: { type: String },
        blend_shapes: [{ type: String }],
      },
    },
    eval: [
      {
        id: { type: String, required: true },
        pts: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true },
);

export const ECOSScenario = mongoose.model('ECOSScenario', ECOSScenarioSchema);
