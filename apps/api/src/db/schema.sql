CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  google_sub TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  deleted_at TIMESTAMPTZ
);

CREATE TABLE sessions (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  refresh_token_hash TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  revoked_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE agents (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  name TEXT NOT NULL,
  system_prompt TEXT NOT NULL,
  model_family TEXT NOT NULL,
  model_name TEXT NOT NULL,
  temperature NUMERIC(3,2) NOT NULL DEFAULT 0.4,
  memory_enabled BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  deleted_at TIMESTAMPTZ
);

CREATE TABLE channels (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  type TEXT NOT NULL,
  name TEXT NOT NULL,
  encrypted_credentials BYTEA,
  rate_limit_per_min INT NOT NULL DEFAULT 60,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  deleted_at TIMESTAMPTZ
);

CREATE TABLE agent_channels (
  agent_id UUID NOT NULL REFERENCES agents(id),
  channel_id UUID NOT NULL REFERENCES channels(id),
  enabled BOOLEAN NOT NULL DEFAULT true,
  PRIMARY KEY (agent_id, channel_id)
);

CREATE TABLE conversations (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  agent_id UUID NOT NULL REFERENCES agents(id),
  channel_id UUID NOT NULL REFERENCES channels(id),
  external_conversation_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE messages (
  id UUID PRIMARY KEY,
  conversation_id UUID NOT NULL REFERENCES conversations(id),
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  token_count INT,
  latency_ms INT,
  error_code TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE api_keys (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  provider TEXT NOT NULL,
  encrypted_value BYTEA NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  deleted_at TIMESTAMPTZ
);

CREATE TABLE usage_metrics (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  agent_id UUID REFERENCES agents(id),
  channel_id UUID REFERENCES channels(id),
  total_tokens INT NOT NULL DEFAULT 0,
  total_requests INT NOT NULL DEFAULT 0,
  avg_latency_ms INT NOT NULL DEFAULT 0,
  error_count INT NOT NULL DEFAULT 0,
  bucket_start TIMESTAMPTZ NOT NULL,
  bucket_granularity TEXT NOT NULL
);

CREATE TABLE audit_logs (
  id UUID PRIMARY KEY,
  user_id UUID,
  action TEXT NOT NULL,
  resource_type TEXT NOT NULL,
  resource_id UUID,
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
