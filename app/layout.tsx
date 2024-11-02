import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'whatsthebeef',
  keywords: 'problem,problems,solution,solutions',
  description: 'rate problems people agree are most pressing',
};

export default function RootLayout({
  children,
  problem_modal,
  add_problem_modal,
}: {
  children: React.ReactNode;
  problem_modal: React.ReactNode;
  add_problem_modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-3xl m-auto">
        <Navbar />
        <main id="main">
          {add_problem_modal}
          {problem_modal}
          {children}
        </main>
      </body>
    </html>
  );
}
