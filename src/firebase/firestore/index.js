import { app } from '../app';
import { getFirestore } from 'firebase/firestore';

export const db = getFirestore(app);

export * from './useCreateAuthUser';
export * from './writeBatchData';
export * from './useRead';
