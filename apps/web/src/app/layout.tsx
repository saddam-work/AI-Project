import Link from 'next/link';
import './styles.css';
import { ReactNode } from 'react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/agents/new', label: 'Agent Builder' },
  { href: '/conversations', label: 'Conversations' },
  { href: '/integrations', label: 'Integrations' }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <aside className="sidebar">
            <div className="brand">
              <p className="brand-kicker">AI OPS</p>
              <h1>Agent Dashboard</h1>
            </div>
            <nav>
              <ul>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
