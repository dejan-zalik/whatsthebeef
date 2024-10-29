'use client';

import generateImage from '@/utils/generateImage';

const Navbar = () => {
  return (
    <nav>
      <div className="container flex m-auto">
        <div className="navbar">
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
      </div>
    </nav>
  );
};

export default Navbar;
