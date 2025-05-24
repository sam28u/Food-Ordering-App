import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const linkBaseClasses =
    'px-3 py-2 rounded-md font-medium transition-all duration-300 border';
  const activeLinkClasses =
    'bg-black text-white border-zinc-700 shadow-md scale-105';
  const inactiveLinkClasses =
    'bg-white text-black border-transparent hover:bg-zinc-900 hover:text-white hover:border-zinc-700 hover:scale-105 hover:shadow-md';

  return (
    <nav className="shadow-xl p-4 flex justify-between sticky top-0 w-full bg-white bg-opacity-20 backdrop-blur-md border border-white/20 rounded-md z-10">
      <Link
        to="/"
        className="text-sm sm:text-lg md:text-xl mt-2 font-bold transition-all duration-300 hover:text-zinc-900 hover:underline hover:scale-105"
      >
        CampusCrave
      </Link>

      <div className="text-sm sm:text-sm md:text-lg space-x-4 flex items-center">
        <Link
          to="/"
          className={`${linkBaseClasses} ${
            currentPath === '/' ? activeLinkClasses : inactiveLinkClasses
          }`}
        >
          Home
        </Link>
        <Link
          to="/orders"
          className={`${linkBaseClasses} ${
            currentPath === '/orders' ? activeLinkClasses : inactiveLinkClasses
          }`}
        >
          My Orders
        </Link>
      </div>
    </nav>
  );
}
