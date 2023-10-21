'use client'

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="flex items-center justify-between p-6 bg-slate-500">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="#" className="text-white">Courses</Link>
        <Link href="#" className="text-white">Lectures</Link>
        <div className="relative group">
          <button onClick={() => setShowDropdown(!showDropdown)} className="text-white">Manage</button>
          {showDropdown && (
            <div className="absolute left-0 mt-2 w-32 bg-white text-black p-2 rounded-md flex flex-col">
              <a href="#">Scores</a>
              <a href="#">Progress</a>
            </div>
          )}
        </div>
        {!showSearch ? (
          <button onClick={() => setShowSearch(true)} className="text-white">Search</button>
        ) : (
          <input type="text" placeholder="Search..." onBlur={() => setShowSearch(false)} className="p-1 rounded-md" />
        )}
        <button className="p-2 bg-white rounded-full text-blue-500">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;