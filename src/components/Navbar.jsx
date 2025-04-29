import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg"> {/* Gradient background + shadow */}
      <div className="max-w-screen-lg mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo as Home Button */}
        <Link to="/" className="text-3xl font-semibold hover:text-gray-200 transition-colors">
          Snippix
        </Link>

        {/* Snippets Link */}
        <div className="flex gap-6">
          <Link
            to="/snippets"
            className="text-lg font-medium hover:text-gray-300 transition-colors px-4 py-2 rounded-md hover:bg-purple-500"
          >
            Snippets
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
