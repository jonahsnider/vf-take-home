import type { Request, Response } from 'express';

import * as services from '../services';
import type { _, WebMessage } from '../types/common';

export default function route(req: Request<_, _, WebMessage>, res: Response): void {
  const response = services.voiceFlow.respond(req.body);

  res.send(response);
}
