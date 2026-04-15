export const agents = [
  {
    id: 'sales-assistant',
    name: 'Sales Assistant',
    model: 'claude-3-7-sonnet',
    channels: ['web', 'api'],
    health: 'healthy',
    p95Latency: 540,
    tokenUsage: 28940
  },
  {
    id: 'support-bot',
    name: 'Support Bot',
    model: 'gpt-4.1-mini',
    channels: ['web', 'slack'],
    health: 'warning',
    p95Latency: 880,
    tokenUsage: 50840
  }
];

export const activity = [
  { id: 1, event: 'Agent response streamed', agent: 'Sales Assistant', at: '2m ago' },
  { id: 2, event: 'Slack channel reconnected', agent: 'Support Bot', at: '8m ago' },
  { id: 3, event: 'Prompt updated', agent: 'Sales Assistant', at: '22m ago' }
];
