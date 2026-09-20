import winston from 'winston';
import { env } from '../config/env.config.js';

// Logs structurés — base de l'exigence "logs inaltérables" : ce logger écrit en JSON
// append-only ; immutableLogger.js ajoute la couche de scellement/chaînage (hash) par-dessus.
export const logger = winston.createLogger({
  level: env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  defaultMeta: { service: 'ifsi-backend' },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    }),
    new winston.transports.File({ filename: 'logs/app.log' }),
  ],
});
