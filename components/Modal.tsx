'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

export function Modal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };

  return (
    <dialog id="my_modal_1" className={isOpen ? 'modal modal-open' : 'modal'}>
      <div className="modal-box max-w-4xl">
        {children}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            handleOpenChange();
          }}
        >
          BUTTON
        </button>
      </div>
    </dialog>
  );
}
