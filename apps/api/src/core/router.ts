import { Express } from 'express';

import { authRouter } from '../modules/auth/auth.routes.js';
import { agentsRouter } from '../modules/agents/agents.routes.js';
import { channelsRouter } from '../modules/channels/channels.routes.js';
import { conversationsRouter } from '../modules/conversations/conversations.routes.js';
import { analyticsRouter } from '../modules/analytics/analytics.routes.js';

export function registerRoutes(app: Express) {
  app.get('/health', (_req, res) => {
    res.json({ ok: true, service: 'ai-dashboard-api' });
  });

  app.use('/v1/auth', authRouter);
  app.use('/v1/agents', agentsRouter);
  app.use('/v1/channels', channelsRouter);
  app.use('/v1/conversations', conversationsRouter);
  app.use('/v1/analytics', analyticsRouter);
}
