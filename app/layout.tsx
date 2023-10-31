// ------------------- Lib -------------------
import type { Metadata } from 'next';
// ----------------- Custom ------------------
import poppins from './fonts';
// ------------------- CSS -------------------
import './globals.css';

// ---------------- MetaData -----------------
export const metadata: Metadata = {
  title: 'shop',
  description: 'clothing shop',
};

// -------------------------------------------
// ---------------- Component ----------------
// -------------------------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
