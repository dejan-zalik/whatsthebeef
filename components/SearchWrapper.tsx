'use client';

import { useState } from 'react';
import type { ProblemProps } from '@/components/ProblemsList';
import Problem from '@/app/problem/[id]/Problem';

const SearchWrapper = ({ problems }: { problems: ProblemProps[] }) => {
  const [searchText, setSearchText] = useState('');

  const filteredProblems = problems.filter((problem) => {
    return problem.name.toLowerCase().includes(searchText.toLowerCase());
  });
  filteredProblems.sort((a, b) => b.upvotes - a.upvotes);

  // evaluate total upvotes for problem container width (within Problem child)
  const totalUpvotes = filteredProblems
    .map((problem: any) => {
      return problem.upvotes;
    })
    .reduce((a: number, b: number) => a + b, 0);

  return (
    <>
      <div className="container m-auto py-4 px-6 text-center">
        <input
          type="text"
          placeholder="filter the beef"
          className="input shadow-md w-full max-w-sm"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      <div className="grid grid-cols-10 mx-4 mt-6">
        <div className="p-2 italic text-center col-span-3 md:col-span-2">
          total votes
        </div>
        <div className="p-2 italic text-center col-span-7 md:col-span-8"></div>
      </div>
      <div className="my-3 ml-3 mr-9 md:mr-6">
        <ul>
          {filteredProblems.map((problem) => (
            <Problem
              key={problem.id}
              problem={problem}
              totalUpvotes={totalUpvotes}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchWrapper;
