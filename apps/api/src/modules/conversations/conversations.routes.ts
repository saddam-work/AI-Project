import { Router } from 'express';

import { runConversationTurn } from './conversations.service.js';

export const conversationsRouter = Router();

conversationsRouter.post('/turn', async (req, res) => {
  const result = await runConversationTurn(req.body);
  res.json(result);
});
