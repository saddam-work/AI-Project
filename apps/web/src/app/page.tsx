import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container">
      <h1>AI Agent Dashboard</h1>
      <p>Production-grade SaaS scaffold for multi-agent orchestration.</p>
      <nav>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/agents/new">Agent Builder</Link></li>
          <li><Link href="/conversations">Conversations</Link></li>
          <li><Link href="/integrations">Integrations</Link></li>
        </ul>
      </nav>
    </main>
  );
}
