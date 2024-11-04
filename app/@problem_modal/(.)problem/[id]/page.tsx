import { Modal } from '@/components/Modal';
import ModalContentProblem from '@/components/ModalContentProblem';
import connectDB from '@/config/database';
import Problem from '@/models/Problem';
import convertToSerializableObject from '@/utils/convertToSerializableObject';

type Params = Promise<{ id: string }>;

export default async function ProblemPage(props: { params: Params }) {
  const params = await props.params;
  const problemId = params.id;

  await connectDB();

  const problemDoc = await Problem.findById(problemId).lean();
  const problem = convertToSerializableObject(problemDoc);

  return (
    <>
      <Modal>
        <ModalContentProblem problem={problem} />
      </Modal>
    </>
  );
}
