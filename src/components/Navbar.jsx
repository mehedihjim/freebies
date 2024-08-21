import { useState } from "react";
import logo from "../assets/Logo.png";
import { navItems } from "./../constants";
import { IoMdMenu } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import CommonBtn from "./CommonBtn";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 pt-[50px] pb-5 backdrop-blur-lg">
      <div className="max-w-conWidth px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div id="logo-img" className="flex items-center flex-shrink-0">
            <a href="#"><img className="" src={logo} alt="logo" /></a>
          </div>
          <ul id="menu-links" className="hidden text-other lg:flex ml-14 space-x-10">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-primary duration-150 ">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            id="menu-buttons"
            className="hidden lg:flex justify-center items-center space-x-[30px]"
          >
            <a
              href="#"
              className="text-secondary font-medium hover:text-primary hover:opacity-45 duration-150"
            >
              Sign In
            </a>
            <CommonBtn text="Sign Up" />
          </div>
          <div id="mobile-menu" className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <ImCancelCircle /> : <IoMdMenu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="mb-6">
              {navItems.map((item, index) => (
                <li key={index} className="py-2">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-secondary font-medium hover:text-primary hover:opacity-45 duration-150"
              >
                Sign In
              </a>
              <CommonBtn text="Sign Up" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
