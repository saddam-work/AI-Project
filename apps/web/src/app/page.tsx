import Link from 'next/link';

export default function HomePage() {
  return (
    <section>
      <h2>Welcome</h2>
      <p className="subtle">
        Build, deploy, and monitor AI agents across channels with centralized governance.
      </p>
      <div className="card-grid">
        <article className="card">
          <h3>Launch an agent</h3>
          <p className="muted">Configure system prompt, model, channel access, and safety policy.</p>
          <Link href="/agents/new" className="button">Open Builder</Link>
        </article>
        <article className="card">
          <h3>Inspect conversations</h3>
          <p className="muted">Trace messages, provider latency, token usage, and retries.</p>
          <Link href="/conversations" className="button">View Logs</Link>
        </article>
      </div>
    </section>
  );
}
