type AgentCardProps = {
  name: string;
  model: string;
  channels: string[];
  health: string;
  p95Latency: number;
};

export function AgentCard({ name, model, channels, health, p95Latency }: AgentCardProps) {
  return (
    <article className="card">
      <header className="split-row">
        <h3>{name}</h3>
        <span className={`pill ${health === 'healthy' ? 'pill-success' : 'pill-warning'}`}>{health}</span>
      </header>
      <p className="muted">Model: {model}</p>
      <p className="muted">Channels: {channels.join(', ')}</p>
      <p className="subtle">P95 latency: {p95Latency}ms</p>
    </article>
  );
}
