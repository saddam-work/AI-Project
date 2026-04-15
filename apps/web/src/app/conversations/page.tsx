import { agents } from '@/lib/mock-data';

export default function ConversationsPage() {
  return (
    <section>
      <header className="page-header">
        <h2>Conversations</h2>
        <p className="subtle">Filter logs and inspect runtime diagnostics.</p>
      </header>

      <article className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Agent</th>
              <th>Channel</th>
              <th>Model</th>
              <th>Tokens</th>
              <th>Latency</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr key={agent.id}>
                <td>{agent.name}</td>
                <td>{agent.channels[0]}</td>
                <td>{agent.model}</td>
                <td>{agent.tokenUsage}</td>
                <td>{agent.p95Latency}ms</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
