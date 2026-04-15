import jwt from 'jsonwebtoken';

import { env } from '../../config/env.js';

export async function issueSession(user: { googleId: string; email: string; name: string }) {
  const accessToken = jwt.sign(
    {
      sub: user.googleId,
      email: user.email,
      name: user.name
    },
    env.JWT_SECRET,
    { expiresIn: '15m' }
  );

  const refreshToken = jwt.sign({ sub: user.googleId, type: 'refresh' }, env.JWT_SECRET, {
    expiresIn: '30d'
  });

  return { accessToken, refreshToken };
}

export async function revokeSession(_refreshToken: string) {
  // Persist revoked token hash in DB/Redis deny-list in production.
  return true;
}
