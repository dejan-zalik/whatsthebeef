'use client';

import { useState } from 'react';
import Problem from './Problem';

interface ProblemProps {
  id: string;
  name: string;
  description: string;
  upvotes: number;
}

interface ProblemProp {
  problems: ProblemProps[];
}

const SearchWrapper = ({ problems }: ProblemProp) => {
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
      <div className="flex mx-4 px-3">
        <div className="p-2 italic text-end basis-1/5">total votes</div>
        <div className="p-2 italic text-center w-full">beef</div>
      </div>
      <div className="m-3">
        <ul>
          {filteredProblems.map((problem) => (
            <Problem
              key={problem.id}
              {...problem}
              totalUpvotes={totalUpvotes}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchWrapper;
