import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import { Providers } from '@/context/Providers';

export const metadata = {
  title: 'whatsthebeef',
  keywords: 'problem,problems,solution,solutions',
  description: 'rate problems people agree are most pressing',
};

export default function RootLayout({
  children,
  problem_modal,
}: {
  children: React.ReactNode;
  problem_modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-3xl m-auto">
        <Providers>
          <Navbar />
          <main id="main">
            {problem_modal}
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
