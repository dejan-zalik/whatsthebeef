'use client';

import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { PlaceholderContext } from '@/context/PlaceholderContext';

export function Modal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const { setShowPlaceholder } = useContext(PlaceholderContext);

  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  useEffect(() => {
    setShowPlaceholder(false);
  }, []);

  return (
    <dialog className={isOpen ? 'modal modal-open' : 'modal'}>
      <div className="modal-box max-w-4xl rounded-lg">
        <div className="flex justify-center mb-9">
          <button
            className="btn btn-ghost btn-circle shadow-md text-red-500"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              handleOpenChange();
            }}
          >
            <X />
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
}
