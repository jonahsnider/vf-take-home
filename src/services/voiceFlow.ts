/* eslint-disable import/prefer-default-export */

import type { WebMessage } from '../types/common';

export function respond(message: WebMessage): string[] {
  console.log(message);

  return ['hello world!', 'goodbye'];
}
