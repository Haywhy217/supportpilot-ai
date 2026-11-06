import Link from "next/link";

const navigation = [
    {name : "Inbox", href:"/", icon : "📥"},
    {name : "Escalations", href:"/escalations", icon : "⚠️"},
    {name : "Customers ", href:"/customers", icon : "👥"},
    {name : "Analytics", href:"/analytics", icon : "📊"},
];

export default function Sidebar() {
    return (
        <aside className="Sidebar">
            <div className="Sidebar-brand">
                <div className="brand-icon">S</div>
                <div>
                    <h1>SupportPilot AI</h1>
                    <p>AI SUPPORT WORKSPACE </p>
                </div>
            </div>



          <div className="Workspace-label">WORKSPACE</div>

            <nav className="Sidebar-navigation">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="nav-link"
                    >
                        <span className="nav-icon">{item.icon}</span>
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div className="Sidebar-footer">
                <div className="Workspace-avatar">P</div>
                <div>
                    <strong>Paynest</strong>
                    <p>Support</p>
                </div>
            </div>
        </aside>
    );
}