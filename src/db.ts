import type { VoiceFlowState } from './types/common';

export type UserId = string;

export interface Session {
  state: VoiceFlowState;
}

/** "Database" */
const db: Map<UserId, Session> = new Map();

export default db;
