'use client';

import memeHOM from '@/assets/images/handonmouth.png';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const FallbackProblemPage = () => {
  useEffect(() => {
    setTimeout(() => {
      redirect('/');
    }, 1000);
  }, []);

  return (
    <>
      <div>Fallback problem page here</div>
      <div className="flex justify-center items-center mt-9">
        <img
          className="w-auto h-auto"
          src={memeHOM.src}
          width={200}
          height={300}
          alt="Image was not loaded for whatever reason..."
        />{' '}
      </div>
    </>
  );
};

export default FallbackProblemPage;
