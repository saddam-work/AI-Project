const providers = [
  { name: 'Web Chat Widget', status: 'Connected', detail: 'Public widget key configured' },
  { name: 'REST API', status: 'Connected', detail: '2 active API keys' },
  { name: 'Slack', status: 'Not connected', detail: 'OAuth app not configured' },
  { name: 'WhatsApp', status: 'Planned', detail: 'Adapter interface ready' }
];

export default function IntegrationsPage() {
  return (
    <section>
      <header className="page-header">
        <h2>Integrations</h2>
        <p className="subtle">Manage channel credentials and connection health.</p>
      </header>

      <div className="card-grid">
        {providers.map((provider) => (
          <article key={provider.name} className="card">
            <h3>{provider.name}</h3>
            <p className="muted">{provider.status}</p>
            <p className="subtle">{provider.detail}</p>
            <button type="button" className="button">Configure</button>
          </article>
        ))}
      </div>
    </section>
  );
}
