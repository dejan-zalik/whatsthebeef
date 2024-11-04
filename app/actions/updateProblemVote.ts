'use server';

import connectDB from '@/config/database';
import Problem from '@/models/Problem';
import { revalidatePath } from 'next/cache';
import type { ProblemProps } from '@/components/ProblemsList';

const updateProblemVote = async (problem: ProblemProps) => {
  await connectDB();

  await Problem.findByIdAndUpdate(problem._id, problem);

  revalidatePath('/', 'layout');
};

export default updateProblemVote;
