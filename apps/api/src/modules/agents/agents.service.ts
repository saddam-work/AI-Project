import { AgentConfig } from '@ai-dashboard/shared';

const inMemoryAgents: AgentConfig[] = [];

export async function listAgents() {
  return inMemoryAgents;
}

export async function createAgent(input: AgentConfig) {
  const created = { ...input, id: crypto.randomUUID() };
  inMemoryAgents.push(created);
  return created;
}
