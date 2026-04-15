import { Router } from 'express';

import { createAgent, listAgents } from './agents.service.js';

export const agentsRouter = Router();

agentsRouter.get('/', async (_req, res) => {
  const items = await listAgents();
  res.json({ items });
});

agentsRouter.post('/', async (req, res) => {
  const created = await createAgent(req.body);
  res.status(201).json(created);
});
