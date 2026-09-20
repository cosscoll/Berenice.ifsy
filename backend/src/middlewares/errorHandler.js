import { logger } from '../utils/logger.js';

export function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  logger.error(err.message, { stack: err.stack, path: req.path });
  const status = err.status || 500;
  res.status(status).json({
    error: err.message || 'Erreur interne',
  });
}

export function notFoundHandler(req, res) {
  res.status(404).json({ error: `Route inconnue: ${req.method} ${req.path}` });
}
