import React, { useContext,useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const {setSearchTerm} = useContext(SearchContext)
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    setSearchTerm(input)
    setInput("")
    navigate("/movies")
  }

  return (
    <nav className="bg-black text-white px-4 md:px-6 py-4 shadow-lg overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap items-center gap-6 text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-600"
                : "hover:text-red-600 transition duration-200"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "text-red-600"
                : "hover:text-red-600 transition duration-200"
            }
          >
            Movies
          </NavLink>

          <NavLink
            to="/watchlist"
            className={({ isActive }) =>
              isActive
                ? "text-red-600"
                : "hover:text-red-600 transition duration-200"
            }
          >
            Watchlist
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 w-full md:w-auto px-1">
          <input
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            type="text"
            placeholder="Search movies..."
            className="flex-1 md:w-64 px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button 
            onClick={handleSearch}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-200 whitespace-nowrap">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}; 

export default Navbar;
