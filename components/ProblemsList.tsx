import problems from '@/problems.json';
import SearchWrapper from '@/components/SearchWrapper';

interface ProblemProps {
  id: string;
  name: string;
  description: string;
  upvotes: number;
}

const ProblemsList = () => {
  const problemList: ProblemProps[] = problems;

  return (
    <section>
      <SearchWrapper problems={problemList} />
    </section>
  );
};

export default ProblemsList;
