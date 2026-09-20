import mongoose from 'mongoose';

const { Schema } = mongoose;

// Historique des révisions FSRS — utile pour l'audit pédagogique et pour
// ré-entraîner/ajuster les paramètres FSRS par cohorte plus tard.
const ReviewLogSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    cardId: { type: Schema.Types.ObjectId, ref: 'FSRSCard', required: true, index: true },
    rating: { type: Number, required: true }, // 1=Again 2=Hard 3=Good 4=Easy
    state: { type: Number, required: true },
    due: { type: Date, required: true },
    stability: { type: Number },
    difficulty: { type: Number },
    elapsed_days: { type: Number },
    last_elapsed_days: { type: Number },
    scheduled_days: { type: Number },
    review: { type: Date, required: true },
  },
  { timestamps: true },
);

export const ReviewLog = mongoose.model('ReviewLog', ReviewLogSchema);
