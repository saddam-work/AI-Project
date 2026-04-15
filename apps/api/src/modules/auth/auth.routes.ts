import { Router } from 'express';

import { issueSession, revokeSession } from './auth.service.js';

export const authRouter = Router();

/**
 * Placeholder endpoints; wire to Passport/Google strategy in implementation phase.
 */
authRouter.post('/google', async (req, res) => {
  const tokenBundle = await issueSession({
    googleId: req.body.googleId,
    email: req.body.email,
    name: req.body.name
  });

  res.json(tokenBundle);
});

authRouter.post('/logout', async (req, res) => {
  await revokeSession(req.body.refreshToken);
  res.status(204).send();
});
