export function StatCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <article className="card stat-card">
      <p className="muted">{label}</p>
      <h3>{value}</h3>
      <p className="subtle">{hint}</p>
    </article>
  );
}
