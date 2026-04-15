# API Design and Sample Flows

## API surface (v1)

### Auth
- `POST /v1/auth/google`
- `POST /v1/auth/logout`

### Agents
- `GET /v1/agents`
- `POST /v1/agents`

### Channels
- `GET /v1/channels/supported`

### Conversations
- `POST /v1/conversations/turn`

### Analytics
- `GET /v1/analytics/overview`

## Sample working flow

1. Call `POST /v1/auth/google` with Google profile payload.
2. Create an agent via `POST /v1/agents`.
3. Discover channel capability via `GET /v1/channels/supported`.
4. Send a turn via `POST /v1/conversations/turn` with selected model.
5. Render metrics on dashboard from `GET /v1/analytics/overview`.

## Request example

```json
{
  "model": "claude-3-7-sonnet",
  "prompt": "Summarize last conversation",
  "context": "...",
  "temperature": 0.3
}
```

## Response example

```json
{
  "output": "[Claude mocked] Summarize last conversation",
  "provider": "anthropic",
  "tokens": 42,
  "latencyMs": 280
}
```
