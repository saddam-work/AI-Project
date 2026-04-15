export default function AgentBuilderPage() {
  return (
    <section>
      <header className="page-header">
        <h2>Agent Builder</h2>
        <p className="subtle">Define behavior, model routing, and channel permissions.</p>
      </header>

      <form className="card form-grid">
        <label>
          Agent Name
          <input type="text" defaultValue="Sales Assistant" />
        </label>

        <label>
          Model
          <select defaultValue="claude-3-7-sonnet">
            <option value="claude-3-7-sonnet">Claude 3.7 Sonnet</option>
            <option value="gpt-4.1-mini">GPT-4.1 mini</option>
          </select>
        </label>

        <label>
          Temperature
          <input type="number" min="0" max="1" step="0.1" defaultValue="0.4" />
        </label>

        <label className="full-width">
          System Prompt
          <textarea rows={8} defaultValue="You are a concise, friendly sales co-pilot." />
        </label>

        <fieldset className="full-width">
          <legend>Channels</legend>
          <div className="check-grid">
            <label><input type="checkbox" defaultChecked /> Web Chat</label>
            <label><input type="checkbox" defaultChecked /> API Endpoint</label>
            <label><input type="checkbox" /> Slack</label>
            <label><input type="checkbox" /> WhatsApp (future)</label>
          </div>
        </fieldset>

        <button type="button" className="button">Save Agent</button>
      </form>
    </section>
  );
}
