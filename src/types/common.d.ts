/** An empty object. */
export type _ = Record<string, never>;

/**
 * An incoming message from a client.
 */
export interface WebMessage {
  userID: string;
  message: string;
}
