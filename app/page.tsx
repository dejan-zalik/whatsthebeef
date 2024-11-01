import ProblemsList from '@/components/ProblemsList';
import { ProblemContextProvider } from '@/context/ProblemContext';

const MainPage = () => {
  return (
    <>
      <ProblemContextProvider>
        <ProblemsList />
      </ProblemContextProvider>
    </>
  );
};

export default MainPage;
