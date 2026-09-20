import { UE } from '../models/UE.model.js';
import { FSRSCard } from '../models/FSRSCard.model.js';

export async function listUEs(req, res, next) {
  try {
    const { bloc } = req.query;
    const filter = bloc ? { bloc } : {};
    const ues = await UE.find(filter).sort({ bloc: 1, code: 1 }).lean();
    res.json({ ues });
  } catch (err) {
    next(err);
  }
}

export async function getUE(req, res, next) {
  try {
    const { code } = req.params;
    const versions = await UE.find({ code }).lean(); // toutes les versions (une par bloc)
    if (!versions.length) return res.status(404).json({ error: 'UE introuvable' });

    // Fiches FSRS déjà associées à cette UE (toutes promotions confondues, pour aperçu contenu)
    const sampleCards = await FSRSCard.find({ ue: code }).limit(5).lean();

    res.json({ code, versions, sampleCards });
  } catch (err) {
    next(err);
  }
}
