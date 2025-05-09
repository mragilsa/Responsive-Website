import React from "react";
import logo from "../assets/logo.png";
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {isMenuOpen && <MobileNavbar setIsMenuOpen={setIsMenuOpen} />}
      <div className="bg-background sticky top-0 z-10">
        <nav className="max-w-screen-xl mx-auto py-4 px-6">
          <div className="flex items-center justify-between">
            <img src={logo} alt="Logo" className="h-11 w-auto object-contain" />

            <ul className="hidden md:flex md:gap-14">
              <li>
                <a className="menu-item">Home</a>
              </li>
              <li>
                <a className="menu-item">Service</a>
              </li>
              <li>
                <a className="menu-item">Our Work</a>
              </li>
              <li>
                <a className="menu-item">Testimonials</a>
              </li>
            </ul>

            <button className="hidden h-10 bg-primary text-white text-base px-6 rounded hover:bg-blue-200 hover:text-primary md:block">
              Contact Us
            </button>

            <button
              onClick={() => setIsMenuOpen(true)} className="w-11 h-11 bg-blue-100 text-2xl text-primary flex items-center justify-center rounded md:hidden z-50">
              {isMenuOpen ? <RiCloseFill/> : <RiMenu4Line />}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;