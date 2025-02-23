import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaWindowClose,
} from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";

import { Dock, DockIcon } from "../../../components/ui/dock";

export default function Navbar() {
  const navigate = useNavigate();
  const { totalQuantity } = useSelector((state) => state.cart);
  const { token, userData } = useSelector((state) => state.auth);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
  if(!userData && !token && userData?.role !== null){
    navigate("/logout")
  }
  }, [token,userData])
 

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
        {/* <div className="hidden md:flex space-x-6">
          <NavLinks />
        </div> */}
        {/* Desktop Menu */}
        <div className="relative text-nowrap hidden justify-center items-center md:flex  w-full ">
          <div>

            <Dock direction="middle" className=" space-x-9 h-9" >
              {/* <NavLinks /> */}
              <DockIcon >
                <Link
                  to={"/"}
                  className="block py-2 px-3 text-lg font-semibold text-slate-200 hover:text-white hover:border-b-[1px] hover:border-slate-100 ">
                  Dashboard
                </Link>
              </DockIcon>
              <DockIcon >
                <Link
                  to={"/courses"}
                  className="block py-2 px-3 text-lg font-semibold text-slate-200 hover:text-white hover:border-b-[1px] hover:border-slate-100 ">
                  Courses
                </Link>
              </DockIcon>
              {token !== null && userData.role == 'admin' && <DockIcon >
                <Link
                  to={"/addCourse"}
                  className="block py-2 px-3 text-lg font-semibold text-slate-200 hover:text-white hover:border-b-[1px] hover:border-slate-100 ">
                  Add Course
                </Link>
              </DockIcon>}
              <DockIcon >
                <Link
                  to={"/about"}
                  className="block py-2 px-3 text-lg font-semibold text-slate-200 hover:text-white hover:border-b-[1px] hover:border-slate-100 ">
                  About Us
                </Link>
              </DockIcon>
              <DockIcon >
                <Link
                  to={"/contact"}
                  className="block py-2 px-3 text-lg font-semibold text-slate-200 hover:text-white hover:border-b-[1px] hover:border-slate-100 ">
                  Contact Us
                </Link>
              </DockIcon>
            </Dock>
          </div>
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
            <hr />
            <NavLinks closeMenu={() => setNavOpen(false)} token={token} role={userData?.role} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const NavLinks = ({ closeMenu ,token , role}) => (
  <>
    {[
      { name: "Dashboard", to: "/" },
      { name: "Courses", to: "/courses" },
       ...(token && role === "admin" ? [{ name: "Add Course", to: "/addCourse" }] : []),
      { name: "About Us", to: "/about" },
      { name: "Contact Us", to: "/contact" },
    ].map((link, index) => (
     
        <Link
          key={index}
          to={link.to}
          className="block py-2 px-3 text-lg font-semibold text-slate-200 hover:text-white hover:border-b-[1px] hover:border-slate-100 "
          onClick={closeMenu}
        >
          {link.name}
        </Link>

    ))}
  </>
);
