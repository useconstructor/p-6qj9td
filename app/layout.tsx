import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Orbit PM',
  description: 'Orbit is a modern SaaS project management tool featuring task tracking, team collaboration, and reporting capabilities with a sleek dark interface and neon purple accents.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0D0D12', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
