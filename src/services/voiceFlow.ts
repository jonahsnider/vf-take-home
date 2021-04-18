/* eslint-disable import/prefer-default-export */

import type { WebMessage } from '../types/common';

interface Response {
  content: string;
  dateTime: `${string} | ${string}`;
}

export function respond(message: WebMessage): Response[] {
  console.log(message);

  const now = new Date();
  const dateTime = `${now.toLocaleTimeString()} | ${now.toLocaleDateString()}` as const;

  return [
    { content: 'hello world!', dateTime },
    { content: 'goodbye', dateTime },
  ];
}
