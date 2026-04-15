# AI Agent Dashboard

Production-oriented monorepo for a multi-tenant AI agent SaaS platform.

## Monorepo Layout

- `apps/web`: Next.js App Router dashboard UI.
- `apps/api`: Node.js backend (Express + modular architecture) for auth, agents, channels, conversations, analytics.
- `packages/shared`: Shared TypeScript contracts, enums, and validation schemas.
- `packages/ai-core`: Provider abstraction (`Claude`, `OpenAI`, extensible).
- `infra`: Docker and deployment scaffolding.

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
