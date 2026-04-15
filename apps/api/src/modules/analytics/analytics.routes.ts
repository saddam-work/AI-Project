import { Router } from 'express';

export const analyticsRouter = Router();

analyticsRouter.get('/overview', (_req, res) => {
  res.json({
    totalMessages: 0,
    totalTokens: 0,
    avgLatencyMs: 0,
    errorRate: 0
  });
});
