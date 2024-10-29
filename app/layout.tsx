import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'whatsthebeef',
  keywords: 'problem,problems,solution,solutions',
  description: 'rate problems people agree are most pressing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-3xl m-auto">
        <Navbar />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
