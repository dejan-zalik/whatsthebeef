'use client';

import addProblem from '@/app/actions/addProblem';

const AddProblem = () => {
  return (
    <>
      <div>
        <form
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
          action={addProblem}
          className="grid grid-cols-1"
        >
          <h1 className="mt-6 mx-auto">In short: what's your beef?</h1>
          <input
            type="text"
            name="title"
            placeholder="type here"
            className="input text-sm rounded-xl shadow-md w-full max-w-xs my-6 m-auto"
          />
          <h1 className="m-auto">How about a description:</h1>
          <textarea
            placeholder="type here"
            name="description"
            className="textarea rounded-xl shadow-md w-full max-w-xs my-6 m-auto resize-none"
          />
          <div>
            <div className="justify-self-center mb-6 ">
              <button
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                  }
                }}
                onClick={() => {
                  const element = document.getElementById(
                    'modalAddProblem'
                  ) as HTMLDialogElement;
                  element.close();
                }}
                className="btn btn-ghost shadow-md rounded-xl border font-bold"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProblem;
