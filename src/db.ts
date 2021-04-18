import type { VoiceflowState } from './types/common';

export type UserId = string;

export interface Session {
  state: VoiceflowState;
}

/** "Database" */
const db: Map<UserId, Session> = new Map();

export default db;
