import { Router } from 'express';

import { listSupportedChannels } from './channels.service.js';

export const channelsRouter = Router();

channelsRouter.get('/supported', (_req, res) => {
  res.json({ items: listSupportedChannels() });
});
