import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white font-semibold text-lg hover:text-gray-300"
        >
          Home
        </Link>
        <div className="space-x-4">
          <Link
            to="/register"
            className="text-white hover:text-gray-300"
          >
            Signup
          </Link>
          <Link
            to="/login"
            className="text-white hover:text-gray-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
