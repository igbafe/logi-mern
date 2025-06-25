import  { useState } from "react";
import { BsGlobe2 } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile/tablet menu

  const activeClass = "text-[#1e3a8a] font-semibold";
  const inactiveClass = "text-gray-500 hover:text-[#1e3a8a] transition-colors duration-300";

  return (
    <nav className="bg-white shadow-md w-full border-b z-50 ">
      <div className="container mx-auto flex justify-between items-center py-6 px-5 lg:px-20">
        {/* Logo Section */}
        <div className="flex items-center">
          <BsGlobe2 className="w-10 h-10 text-[#1e3a8a]" />
          <span className="ml-2 text-2xl text-gray-500 font-semibold">LOGISTICS</span>
        </div>

        {/* Menu Icon for Mobile and Tablet */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-[#1e3a8a] focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trackinggoods"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              TRACK GOODS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              BLOG
            </NavLink>
          </li>
        </ul>

        {/* Mobile/Tablet Menu (Dropdown) */}
        {isOpen && (
          <ul className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 z-50">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
                onClick={() => setIsOpen(false)}
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/trackinggoods"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
                onClick={() => setIsOpen(false)}
              >
                TRACK GOODS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
                onClick={() => setIsOpen(false)}
              >
                BLOG
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
