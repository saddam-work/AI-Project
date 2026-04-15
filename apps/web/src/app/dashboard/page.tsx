import { AgentCard } from '@/components/agent-card';
import { StatCard } from '@/components/stat-card';
import { activity, agents } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <section>
      <header className="page-header">
        <h2>Main Dashboard</h2>
        <p className="subtle">Operational summary across all agents and channels.</p>
      </header>

      <div className="stats-grid">
        <StatCard label="Total Agents" value="2" hint="1 healthy, 1 needs tuning" />
        <StatCard label="24h Requests" value="18,420" hint="+12.4% versus prior day" />
        <StatCard label="P95 Latency" value="0.88s" hint="Source: combined channel traffic" />
      </div>

      <div className="card-grid">
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            name={agent.name}
            model={agent.model}
            channels={agent.channels}
            health={agent.health}
            p95Latency={agent.p95Latency}
          />
        ))}
      </div>

      <article className="card">
        <h3>Recent Activity</h3>
        <ul className="activity-list">
          {activity.map((item) => (
            <li key={item.id}>
              <p>{item.event}</p>
              <p className="subtle">{item.agent} · {item.at}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
