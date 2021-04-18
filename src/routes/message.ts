import type { Request, Response } from 'express';

import * as svcs from '../services';
import type { _, WebMessage } from '../types/common';

export default function route(req: Request<_, _, WebMessage>, res: Response): void {
  const response = svcs.voiceFlow.respond(req.body);

  res.send(response);
}
