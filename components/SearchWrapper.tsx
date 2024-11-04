'use client';

import { useState } from 'react';
import type { ProblemProps } from '@/components/ProblemsList';
import Problem from '@/components/Problem';

const SearchWrapper = ({ problems }: { problems: ProblemProps[] }) => {
  const [searchText, setSearchText] = useState('');

  const removeZeroVoteProblems = problems.filter((problem) => {
    return problem.upvotes >= 0;
  });

  const filteredProblems = removeZeroVoteProblems.filter((problem) => {
    return problem.title.toLowerCase().includes(searchText.toLowerCase());
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
      {/* <div className="grid grid-cols-4 mx-24 mt-6">
        <div className="text-center shadow-custom">1</div>
        <div className="text-center shadow-lg">2</div>
        <div className="text-center">3</div>
        <div className="text-center">4</div>
      </div> */}
      <div className="grid grid-cols-10 mx-4 mt-6">
        <div className="p-2 italic text-center col-span-3 md:col-span-2">
          total votes
        </div>
        <div className="p-2 italic text-center col-span-7 md:col-span-8"></div>
      </div>
      <div className="my-3 ml-3 mr-9 md:mr-6">
        <ul>
          {filteredProblems.map((problem, index) => (
            <Problem
              key={index}
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
