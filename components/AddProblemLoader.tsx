'use client';

import { LoaderCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useFormStatus } from 'react-dom';

const AddProblemLoader = () => {
  const { pending } = useFormStatus();

  useEffect(() => {
    if (!pending) {
      const element = document.getElementById(
        'modalAddProblem'
      ) as HTMLDialogElement;
      element.close();
    }
  }, [pending]);

  return (
    <>
      {pending && (
        <dialog className="modal modal-open">
          <div className="flex align-middle justify-center">
            <LoaderCircle size={96} className="animate-spin text-green-500" />
          </div>
        </dialog>
      )}
    </>
  );
};

export default AddProblemLoader;
