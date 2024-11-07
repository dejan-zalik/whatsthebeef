'use server';

import connectDB from '@/config/database';
import Problem from '@/models/Problem';
import { revalidatePath } from 'next/cache';
import type { ProblemProps } from '@/components/ProblemsList';

const updateProblemVote = async (problem: ProblemProps) => {
  await connectDB();

  if (problem.upvotes < 0) {
    const currentProblem = await Problem.findById(problem._id).deleteOne();
  } else {
    await Problem.findByIdAndUpdate(problem._id, problem);
  }

  revalidatePath('/', 'layout');
};

export default updateProblemVote;
