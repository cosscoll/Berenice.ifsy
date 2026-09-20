import mongoose from 'mongoose';

const { Schema } = mongoose;

// Certaines UE (ex. 2.11 Pharmacologie) sont enseignées de façon progressive sur
// plusieurs blocs de semestres avec un contenu différent à chaque fois (ADME en
// S1-S2, AVK/Antalgiques en S3-S4, prescription infirmière en S5-S6). L'unicité
// porte donc sur (code, bloc), pas sur code seul.
const UESchema = new Schema(
  {
    code: { type: String, required: true }, // ex: "2.11"
    titre: { type: String, required: true },
    semesters: [{ type: Number, min: 1, max: 6 }],
    bloc: { type: String, enum: ['S1-S2', 'S3-S4', 'S5-S6'], required: true },
  },
  { timestamps: true },
);

UESchema.index({ code: 1, bloc: 1 }, { unique: true });

export const UE = mongoose.model('UE', UESchema);
