interface PropTypes {
  totalUpvotes: number;
  upvotes: number;
  name: string;
}

const Problem = ({ totalUpvotes, ...problem }: PropTypes) => {
  const problemWidth = (problem.upvotes / totalUpvotes) * 100;

  return (
    <li className="m-1 p-1 overflow-hidden flex text-xl">
      <div className="p-2 text-center basis-1/5">{problem.upvotes}</div>
      <div
        style={{ width: `${problemWidth}%` }}
        className="bg-green-500 whitespace-nowrap p-2"
      >
        {problem.name}
      </div>
    </li>
  );
};

export default Problem;
