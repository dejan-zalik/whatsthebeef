import { Modal } from '@/components/Modal';
import type { ProblemProps } from '@/components/ProblemsList';
import ModalContentProblem from '@/components/ModalContentProblem';

type Props = {
  params: {
    id: string;
  };
};

// const ProblemPage = async () => {
const ProblemPage = async ({ params: { id } }: Props) => {
  const response = await fetch(`http://localhost:3500/problems/${id}`, {
    cache: 'no-store',
  });

  const problem: ProblemProps = await response.json();

  return (
    <>
      <Modal>
        <ModalContentProblem problem={problem} />
      </Modal>
    </>
  );
};

export default ProblemPage;