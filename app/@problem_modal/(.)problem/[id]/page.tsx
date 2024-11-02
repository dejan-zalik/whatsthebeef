import { Modal } from '@/components/Modal';
import type { ProblemProps } from '@/components/ProblemsList';
import ModalContentProblem from '@/components/ModalContentProblem';
import connectDB from '@/config/database';
import Problem from '@/models/Problem';
import convertToSerializableObject from '@/utils/convertToSerializableObject';

type Props = {
  params: {
    id: string;
  };
};

const ProblemPage = async ({ params: { id } }: Props) => {
  await connectDB();

  const problemDoc = await Problem.findById(id).lean();
  const problem = convertToSerializableObject(problemDoc);

  return (
    <>
      <Modal>
        <ModalContentProblem problem={problem} />
      </Modal>
    </>
  );
};

export default ProblemPage;
