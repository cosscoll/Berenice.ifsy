import mongoose from 'mongoose';
import { env } from './env.config.js';
import { logger } from '../utils/logger.js';

export async function connectDB() {
  mongoose.set('strictQuery', true);
  await mongoose.connect(env.MONGO_URI, {
    autoIndex: env.NODE_ENV !== 'production',
  });
  logger.info(`MongoDB connecté (${env.MONGO_URI})`);

  mongoose.connection.on('error', (err) => {
    logger.error('Erreur MongoDB', { err: err.message });
  });

  return mongoose.connection;
}

export async function disconnectDB() {
  await mongoose.disconnect();
}
