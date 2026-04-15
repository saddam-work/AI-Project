export default function AgentBuilderPage({ params }: { params: { agentId: string } }) {
  return (
    <section className="container">
      <h2>Agent Builder</h2>
      <p>Editing agent: {params.agentId}</p>
      <ul>
        <li>Prompt editor</li>
        <li>Model selector (Claude/GPT)</li>
        <li>Channel toggles</li>
        <li>Playground run panel</li>
      </ul>
    </section>
  );
}
