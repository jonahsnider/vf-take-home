/* eslint-disable import/prefer-default-export */

import assert from 'assert';
import got from 'got';

import { voiceflow } from '../config';
import sessions from '../db';
import type { VoiceflowState, WebMessage } from '../types/common';

const http = got.extend({ prefixUrl: 'https://general-runtime.voiceflow.com', headers: { Authorization: voiceflow.apiKey } });

interface Response {
  content: string;
  dateTime: string;
}

export async function respond(context: WebMessage): Promise<Response[]> {
  console.log(`[${context.userID}] ->`, context.message);

  if (!sessions.has(context.userID)) {
    // Create initial state if new session

    const response = await http.get<VoiceflowState>(`interact/${voiceflow.versionId}/state`, { responseType: 'json' });

    // Store session in DB
    sessions.set(context.userID, { state: response.body });
  }

  const user = sessions.get(context.userID);

  assert(user);

  // Send the user's message
  const response = await http.post<VoiceflowState>(`interact/${voiceflow.versionId}`, {
    json: {
      request: {
        type: 'text',
        payload: context.message,
      },
      state: user.state,
    },
    responseType: 'json',
  });

  // To keep things simple I just display this as text, rich content like images or a select array aren't supported
  const replyHtml = response.body.state.storage.output;

  // Format the reply HTML into plain text
  const plainReply: string[] = replyHtml
    // Bug??
    // Every response started with the string "undefined"...
    .slice('undefined'.length)
    // Response is HTML that is in this format
    // Don't actually parse HTML with regex
    .replace(/<voice name="Alexa">/g, '\n')
    .replace(/<\/voice>/g, '')
    // Remove leading newline
    .trim()
    // Split each line into a separate element
    // If the original text contained newlines this will cause ugly formatting
    .split('\n');

  for (const line of plainReply) {
    // Log each line to console
    console.log(`[${context.userID}] <-`, line);
  }

  const now = new Date();
  const dateTime = `${now.toLocaleTimeString()} | ${now.toLocaleDateString()}`;

  return plainReply.map((line, index) => ({
    content: line,
    // Easy way to only display the timestamp in the last message sent
    dateTime: index === plainReply.length - 1 ? dateTime : '',
  }));
}
