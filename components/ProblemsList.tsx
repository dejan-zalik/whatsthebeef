import SearchWrapper from '@/components/SearchWrapper';
import connectDB from '@/config/database';
import Problem from '@/models/Problem';
import convertToSerializableObject from '@/utils/convertToSerializableObject';
import { ObjectId } from 'bson';

export type ProblemProps = {
  _id: ObjectId;
  name: string;
  description: string;
  upvotes: number;
};

const ProblemsList = async () => {
  await connectDB();

  const problemsDoc = await Problem.find({}).lean();
  const problems = problemsDoc.map(convertToSerializableObject);

  return (
    <section>
      <SearchWrapper problems={problems} />
    </section>
  );
};

export default ProblemsList;
