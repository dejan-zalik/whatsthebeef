import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'whatsthebeef',
  keywords: 'problem,problems,solution,solutions',
  description: 'rate problems people agree are most pressing',
};

interface RootProps {
  children: React.ReactNode;
  problem_modal: React.ReactNode;
  add_problem_modal: React.ReactNode;
}

const RootLayout = ({
  children,
  problem_modal,
  add_problem_modal,
}: RootProps) => {
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
};

export default RootLayout;
