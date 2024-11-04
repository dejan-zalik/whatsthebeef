'use server';

import connectDB from '@/config/database';
import Problem from '@/models/Problem';
import { revalidatePath } from 'next/cache';

const addProblem = async (formData: FormData) => {
  await connectDB();

  const problemData = {
    title: formData.get('title'),
    description: formData.get('description'),
    upvotes: 1,
  };

  const newProblem = new Problem(problemData);
  await newProblem.save();

  revalidatePath('/', 'layout');
};

export default addProblem;
