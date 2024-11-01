import SearchWrapper from '@/components/SearchWrapper';

export type ProblemProps = {
  id: string;
  name: string;
  description: string;
  upvotes: number;
};

const ProblemsList = async () => {
  const response = await fetch('http://localhost:3500/problems');
  const problems: ProblemProps[] = await response.json();

  return (
    <section>
      <SearchWrapper problems={problems} />
    </section>
  );
};

export default ProblemsList;
