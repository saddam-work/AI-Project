# AI Agent Dashboard

Production-oriented monorepo for a multi-tenant AI agent SaaS platform.

## Monorepo Layout

- `apps/web`: Next.js App Router dashboard UI.
- `apps/api`: Node.js backend (Express + modular architecture) for auth, agents, channels, conversations, analytics.
- `packages/shared`: Shared TypeScript contracts, enums, and validation schemas.
- `packages/ai-core`: Provider abstraction (`Claude`, `OpenAI`, extensible).
- `infra`: Docker and deployment scaffolding.

## Open the website locally

### Option A: run only the web app (quickest)

```bash
npm install
npm run dev:web
```

Then open:
- `http://localhost:3000`

### Option B: run web + API + database with Docker

```bash
docker compose up --build
```

Then open:
- Web: `http://localhost:3000`
- API health check: `http://localhost:4000/health`

### If `npm install` fails with registry/proxy errors

Set registry explicitly and retry:

```bash
npm config set registry https://registry.npmjs.org/
npm install
```

If your environment is behind a corporate proxy, set `HTTPS_PROXY`/`HTTP_PROXY` correctly before installing dependencies.

## Vercel troubleshooting (if deployed URL shows 404)

If your Vercel URL opens but shows **404 Not Found**, the project is usually pointing at the wrong folder in a monorepo.

Use these settings in Vercel Project Settings:

- **Root Directory**: `apps/web`
- **Framework Preset**: `Next.js`
- **Install Command**: `npm install`
- **Build Command**: `npm run build`
- **React compatibility**: use `react@^18.2.0` and `react-dom@^18.2.0` with `next@15.0.0` to avoid peer dependency resolution errors.
- **Output Directory**: (leave default for Next.js)

After changing settings:
1. Go to **Deployments** → select latest deployment.
2. Click **Redeploy**.
3. Open your domain again.

If it still fails, check **Project Settings → Environment Variables** and ensure required values are present for production.

## Can I preview directly from GitHub?

Yes — but not from GitHub repository pages alone for this app stack.

- **Best option (recommended): Vercel**
  - Import your GitHub repo in Vercel.
  - Set Root Directory to `apps/web`.
  - Every push/PR gets a live preview URL.

- **Alternative: Netlify**
  - Same approach: connect GitHub repo and set base directory to `apps/web`.

- **GitHub Pages**
  - Works best for static websites.
  - This project uses Next.js app/runtime features, so GitHub Pages is not the best default preview path.

## Product Architecture

### Backend domains

- **Auth**: Google OAuth, JWT access/refresh token lifecycle, revoke session.
- **Agents**: CRUD agent configs, model settings, guardrails, memory strategy.
- **Channels**: Channel registration, secrets, rate limiting policy, delivery logs.
- **Conversations**: Message ingestion, routing, persistence, streaming.
- **Analytics**: Usage, latency, token and error metrics.
- **Audit**: Immutable event logs for security/compliance workflows.

### Runtime flow

1. Channel webhook/API receives message.
2. Request is authenticated and tenant-resolved.
3. Router resolves target agent + channel policy.
4. AI service uses `generateResponse` abstraction.
5. Response streams back to the caller and is persisted.
6. Metrics/events are emitted to Redis/BullMQ and analytics workers.

## Security baseline

- Google OAuth only in v1.
- Refresh tokens stored hashed.
- Provider/channel secrets encrypted at rest with envelope encryption.
- Row-level tenant scoping in every repository query.
- Input validation with schema guards at API boundary.

## Database model (v1)

- `users`
- `sessions`
- `agents`
- `channels`
- `agent_channels`
- `conversations`
- `messages`
- `api_keys`
- `audit_logs`
- `usage_metrics`

See: `apps/api/src/db/schema.sql`.

## Quick start

```bash
npm install
npm run dev:web
```

### Optional API start

```bash
npm run dev:api
```

## Deployment

- **Web**: Vercel or containerized Next.js.
- **API**: Railway/AWS ECS/Fargate.
- **Stateful services**: PostgreSQL + Redis managed services.
- **CI/CD**: Build/test on PR, deploy by environment branch strategy.

## Future-ready extension points

- Add new model providers by implementing `AIProvider` in `packages/ai-core`.
- Add new channels by implementing `ChannelAdapter` in `apps/api/src/modules/channels/adapters`.
- Add team-level RBAC by introducing `organizations`, `memberships`, `roles`.
