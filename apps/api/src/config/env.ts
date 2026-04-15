import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),
  JWT_SECRET: z.string().default('dev-secret'),
  GOOGLE_CLIENT_ID: z.string().default('google-client-id'),
  GOOGLE_CLIENT_SECRET: z.string().default('google-client-secret'),
  GOOGLE_CALLBACK_URL: z.string().default('http://localhost:4000/v1/auth/google/callback')
});

export const env = envSchema.parse(process.env);
