import type { Request, Response } from 'express';

import * as services from '../services';
import type { EmptyObject, WebMessage } from '../types/common';

export default async function route(req: Request<EmptyObject, EmptyObject, WebMessage>, res: Response): Promise<void> {
  const response = await services.voiceflow.respond(req.body);

  res.send(response);
}
