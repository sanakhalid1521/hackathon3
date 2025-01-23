'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = (event: any) => {
    event.preventDefault();

    if (!searchQuery.trim()) {
      // If the search query is empty, show an error message
      setErrorMessage("Please enter a search term.");
    } else {
      // Redirect to the search page with the query
      setErrorMessage(""); // Clear the error message
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav className="bg-[#FBEBB5] w-full h-[100px]">
      <div className="container mx-auto flex items-center justify-between h-full px-6">
        <ul className="flex-grow flex justify-center space-x-8 text-black text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/account">Account</Link></li>
        
          
        </ul>

        <div className="flex items-center space-x-6 text-black text-xl">
          {/* Search Form */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              className="px-4 py-2 rounded-full border-2 border-gray-300"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl">
              <FaSearch />
            </button>
          </form>
          {/* Error Message */}
          {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

          {/* Icons */}
          <Link href="/profile"><FiUser /></Link>
          <Link href="/wishlist"><CiHeart /></Link>
          <Link href="/cart"><FaCartPlus /></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
