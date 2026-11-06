
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="dashboard">
      <Sidebar />

      <section className="main-content">
        <header className="topbar">
          <div>
            <p className="breadcrumb">Workspace / Inbox</p>
            <h2>Inbox</h2>
          </div>

          <button className="new-email-button">
            + New Email
          </button>
        </header>

        <section className="welcome-section">
          <div>
            <h2>Welcome to SupportPilot AI</h2>
            <p>
              Manage customer conversations and deliver better
              support experiences.
            </p>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <p>Total Emails</p>
            <h3>—</h3>
            <span>Waiting for email data</span>
          </div>

          <div className="stat-card">
            <p>Open Conversations</p>
            <h3>—</h3>
            <span>Waiting for email data</span>
          </div>

          <div className="stat-card">
            <p>Escalations</p>
            <h3>—</h3>
            <span>Waiting for email data</span>
          </div>

          <div className="stat-card">
            <p>Resolved</p>
            <h3>—</h3>
            <span>Waiting for email data</span>
          </div>
        </section>

        <section className="inbox-panel">
          <div className="panel-heading">
            <div>
              <h3>Recent Conversations</h3>
              <p>Your latest customer support emails</p>
            </div>
          </div>

          <div className="empty-state">
            <div className="empty-icon">📨</div>
            <h3>Your inbox is ready</h3>
            <p>
              Customer emails will appear here when they are submitted.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
