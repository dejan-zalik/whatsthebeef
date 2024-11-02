'use client';

import generateImage from '@/utils/generateImage';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="container flex m-auto mt-3">
        <div className="navbar ml-3 md:ml-6">
          <button
            onClick={(e) => {
              e.preventDefault();
              generateImage();
            }}
            className="btn btn-ghost"
          >
            whatsthebeef
          </button>
        </div>
        <div className="navbar justify-end mr-3 md:ml-6">
          {/* <Link href={'/add_problem'} scroll={false}> */}
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => {
              const element = document.getElementById(
                'my_modal_1'
              ) as HTMLDialogElement;
              element.showModal();
            }}
          >
            <Plus />
          </button>
          {/* </Link> */}
        </div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </nav>
  );
};

export default Navbar;
