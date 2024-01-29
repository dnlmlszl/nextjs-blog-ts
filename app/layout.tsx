import './globals.css';
import Navbar from './components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Laszlo Mihaly Daniel's Blog",
  description: 'Created by LMD',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-100">
        <Navbar />
        <main className="px-4md:px-6 mx-auto">{children}</main>
      </body>
    </html>
  );
}
