'use client';

import { ThumbsDown, ThumbsUp } from 'lucide-react';
import type { ProblemProps } from '@/components/ProblemsList';
import { useRouter } from 'next/navigation';
import updateProblemVote from '@/app/actions/updateProblemVote';

const ModalContentProblem = ({ problem }: { problem: ProblemProps }) => {
  const router = useRouter();

  const handleDownvote = () => {
    problem.upvotes -= 1;
    updateProblemVote(problem);
    router.back();
  };

  const handleUpvote = () => {
    problem.upvotes += 1;
    updateProblemVote(problem);
    router.back();
  };

  return (
    <>
      <div className="flex justify-center my-6">{problem?.description}</div>
      <div className="flex justify-center my-6">
        <button
          className="btn btn-ghost btn-circle shadow-md mx-3 text-green-500"
          onClick={(e) => {
            e.preventDefault();
            handleUpvote();
          }}
        >
          <ThumbsUp />
        </button>
        <button
          className="btn btn-ghost btn-circle shadow-md mx-3 text-red-500"
          onClick={(e) => {
            e.preventDefault();
            handleDownvote();
          }}
        >
          <ThumbsDown />
        </button>
      </div>
    </>
  );
};

export default ModalContentProblem;
