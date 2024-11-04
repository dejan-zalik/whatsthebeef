'use client';

import type { ProblemProps } from '@/components/ProblemsList';
import Link from 'next/link';

const Problem = ({
  totalUpvotes,
  problem,
}: {
  totalUpvotes: number;
  problem: ProblemProps;
}) => {
  const problemWidth = (problem.upvotes / totalUpvotes) * 100;

  return (
    <>
      <Link href={`/problem/${problem._id}`} scroll={false}>
        <li className="m-1 p-1 overflow-hidden text-xl grid grid-cols-10 hover:shadow-md rounded-md cursor-grab">
          <div className="p-2 text-center col-span-3 md:col-span-2">
            {problem.upvotes}
          </div>
          <div
            style={{ width: `${problemWidth}%` }}
            className="bg-green-500 whitespace-nowrap p-2 col-span-7 md:col-span-8"
          >
            {problem.title}
          </div>
        </li>
      </Link>
    </>
  );
};

export default Problem;
