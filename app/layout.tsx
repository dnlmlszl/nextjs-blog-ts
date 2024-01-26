import './globals.css';
import Navbar from './components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "M Daniels' Blog",
  description: 'Created by LMD',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-zinc-900">
        <Navbar />
        <main className="px-4md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
