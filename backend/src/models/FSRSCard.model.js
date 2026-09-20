import mongoose from 'mongoose';

const { Schema } = mongoose;

// Miroir du schéma "Fiche de révision" décrit dans le cahier des charges
// (section 3 — Format Fiche Révision FSRS + Markmap).
const FSRSCardSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    ue: { type: String, required: true },       // ex: "2.11"
    concept: { type: String, required: true },  // ex: "AVK"
    type: { type: String, enum: ['basic', 'cloze'], default: 'basic' },
    front: { type: String, required: true },
    back: { type: String, required: true },
    tags: [{ type: String }],
    visual: {
      renderer: { type: String, enum: ['markmap', null], default: null },
      md: { type: String, default: null },
    },

    // --- État FSRS (ts-fsrs Card) ---
    due: { type: Date, required: true },
    stability: { type: Number, default: 0 },
    difficulty: { type: Number, default: 0 },
    elapsed_days: { type: Number, default: 0 },
    scheduled_days: { type: Number, default: 0 },
    reps: { type: Number, default: 0 },
    lapses: { type: Number, default: 0 },
    state: { type: Number, default: 0 }, // 0=New,1=Learning,2=Review,3=Relearning
    last_review: { type: Date, default: null },
  },
  { timestamps: true },
);

FSRSCardSchema.index({ userId: 1, due: 1 });

export const FSRSCard = mongoose.model('FSRSCard', FSRSCardSchema);
