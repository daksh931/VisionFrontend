import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 border-t border-gray-700">
            <div className="mx-auto w-full max-w-screen-xl px-6">
                <div className="grid md:grid-cols-3 gap-10">
                    <div>
                        <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300 transition">
                            Vision Classes
                        </Link>
                        <p className="mt-3 text-gray-400 text-sm">Empowering learners through quality education.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-300">Resources</h2>
                            <ul className="text-gray-400">
                                <li className="mb-2 hover:text-white transition">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="hover:text-white transition">
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-300">Follow us</h2>
                            <ul className="text-gray-400">
                                <li className="mb-2 hover:text-white transition">
                                    <a href="https://github.com/dalip03" target="_blank" rel="noreferrer">Github</a>
                                </li>
                                <li className="hover:text-white transition">
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-300">Legal</h2>
                            <ul className="text-gray-400">
                                <li className="mb-2 hover:text-white transition">
                                    <Link to="#">Privacy Policy</Link>
                                </li>
                                <li className="hover:text-white transition">
                                    <Link to="#">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-600" />
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <span>© 2024 Vision Classes. All Rights Reserved.</span>
                    <div className="flex mt-4 md:mt-0 space-x-4">
                        <Link to="#" className="hover:text-white transition">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="#" className="hover:text-white transition">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="#" className="hover:text-white transition">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="#" className="hover:text-white transition">
                            <i className="fab fa-github"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
