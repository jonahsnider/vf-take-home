/** An empty object. */
export type EmptyObject = Record<string, never>;

/**
 * An incoming message from a client.
 */
export interface WebMessage {
  userID: string;
  message: string;
}

/**
 * The response from VoiceFlow's stateless API interact route.
 */
export interface VoiceFlowState {
  request:
    | {
        type: 'text';
        payload: string;
      }
    | {
        type: 'intent';
        payload: {
          query: string;
          intent: Record<string, unknown>;
          entities: unknown[];
        };
      }
    | { type: string };
  state: {
    stack: [
      {
        programID: string;
        nodeID: string;
        variables: EmptyObject;
        storage: { speak: string };
        commands: Array<{
          type: string;
          event: Record<string, unknown>;
        }>;
      }
    ];
    storage: { output: string };
    variables: Record<string, unknown>;
  };
  trace: [{ type: string; payload: Record<string, unknown> }];
}
