'use client';

import memeHOM from '@/assets/images/handonmouth.png';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const FallbackRedirect = () => {
  useEffect(() => {
    setTimeout(() => {
      redirect('/');
    }, 500);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mt-9">
        <img
          className="w-72 h-auto md:w-96"
          src={memeHOM.src}
          alt="Image was not loaded for whatever reason..."
        />
      </div>
    </>
  );
};

export default FallbackRedirect;
