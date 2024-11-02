'use server';

const addProblem = async (formData: FormData) => {
  const problemData = {
    title: formData.get('title'),
    description: formData.get('description'),
  };

  console.log(problemData);
};

export default addProblem;
