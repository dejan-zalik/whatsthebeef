'use client';

import { createContext, useState } from 'react';

type ContextProviderProps = {
  children: React.ReactNode;
};

type ContextType = {
  problemId: string;
  setProblemId: React.Dispatch<React.SetStateAction<string>>;
};

const contextStateType = {
  problemId: '',
  setProblemId: () => '',
};

const ProblemContext = createContext<ContextType>(contextStateType);

const ProblemContextProvider = ({ children }: ContextProviderProps) => {
  const [problemId, setProblemId] = useState<string>('');
  return (
    <ProblemContext.Provider value={{ problemId, setProblemId }}>
      {children}
    </ProblemContext.Provider>
  );
};

export { ProblemContext, ProblemContextProvider };
