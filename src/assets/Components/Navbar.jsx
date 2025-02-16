import React, { useState } from "react";
import {
  FaBars,
  FaArrowLeft,
  FaUser,
  FaCross,
  FaWindowClose,
} from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";

export default function Navbar() {
  const navigate = useNavigate();
  const { totalQuantity } = useSelector((state) => state.cart);
  const { token, userData } = useSelector((state) => state.auth);
  const [navOpen, setNavOpen] = useState(false);

  if (userData == null && token != null) {
    return navigate("/logout");
  }

  return (
    <nav className="bg-gray-900/90 text-white shadow-md sticky top-0 w-full z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="text-3xl md:hidden"
        >
          {navOpen ? <FaWindowClose /> : <FaBars />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo1.svg" alt="My Courses Logo" className="h-10 w-full" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLinks />
        </div>

        {/* Cart & Profile */}
        <div className="flex items-center space-x-4">
          {token ? (
            <>
              <Link
                to="/cart"
                className="relative text-2xl hover:text-gray-400"
              >
                <PiShoppingCartSimpleBold />
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-0.5 rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </Link>
              <Link to="/logout" className="text-2xl hover:text-gray-400">
                <LuLogOut />
              </Link>
            </>
          ) : (
            <>
              <Button to="/signup">Sign Up</Button>
              <Button to="/login">Login</Button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-gray-800/90 text-white p-6 shadow-lg flex flex-col space-y-4"
          >
            <div className="flex justify-center ">
              <h1 className="text-2xl font-semibold font-sans">Vision Classes</h1>
              <img src="/logo1.svg" alt="My Courses Logo" className="h-10 w-20" />

            </div>
            <hr/>
            <NavLinks closeMenu={() => setNavOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const NavLinks = ({ closeMenu }) => (
  <>
    {[
      { name: "Dashboard", to: "/" },
      { name: "Courses", to: "/courses" },
      { name: "About Us", to: "/about" },
      { name: "Contact Us", to: "/contact" },
    ].map((link, index) => (
      <Link
        key={index}
        to={link.to}
        className="block py-2 px-4 text-lg font-semibold hover:bg-gray-700 rounded-md transition"
        onClick={closeMenu}
      >
        {link.name}
      </Link>
    ))}
  </>
);
