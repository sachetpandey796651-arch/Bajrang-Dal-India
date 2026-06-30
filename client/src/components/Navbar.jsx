import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-orange-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-12 h-12 rounded-full bg-white p-1"
          />
          <h1 className="text-2xl font-bold">
            Bajrang Dal India
          </h1>
        </div>

        <div className="flex gap-6 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;