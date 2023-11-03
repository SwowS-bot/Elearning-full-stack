"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="flex items-center justify-between p-6 bg-black">
      <div>
        <Link href="/" className=" text-white">
          Logo
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/Courses" className="text-white">
          Courses
        </Link>
        <Link href="/Lectures" className="text-white">
          Lectures
        </Link>
        <div className="relative group">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-white"
          >
            Manage
          </button>
          {showDropdown && (
            <div className="absolute left-0 mt-2 w-32 bg-white text-black p-2 rounded-md flex flex-col">
              <a href="#">Courses</a>
              <a href="#">Progress</a>
            </div>
          )}
        </div>
        {!showSearch ? (
          <button onClick={() => setShowSearch(true)} className="text-white">
            Search
          </button>
        ) : (
          <input
            type="text"
            placeholder="Search..."
            onBlur={() => setShowSearch(false)}
            className="p-1 rounded-md"
          />
        )}
        <Link href="/SignIn" className="p-2 bg-white rounded-xl text-blue-500">
          SignIn
        </Link>
        <Link href="/SignUp" className="p-2 bg-white rounded-xl text-blue-500">
          SignUp
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
