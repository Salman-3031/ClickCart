import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { id: 1, link: "/", linkName: "Home" },
  { id: 2, link: "/product", linkName: "Product" },
  { id: 3, link: "/about", linkName: "About" },
  { id: 4, link: "/contact", linkName: "Contact" },
];

const Navbar = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white py-3 shadow-2xl relative z-50">
      <div className="container flex justify-between items-center">
        {/* Left section: Logo + Location */}
        <div className="flex gap-5 items-center">
          <div className="logo">
            <Link className="text-2xl font-semibold">
              <h1>
                <span className="text-btnColor font-serif">C</span>lick
                <span className="text-btnColor font-serif">C</span>art
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <CiLocationOn className="text-btnColor text-xl" />
            <h4 className="text-paraColor font-medium">
              {/* {location ? <p>{location.town}</p> : "Add Address"} */}
              Address
            </h4>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          <ul className="flex items-center gap-5">
            {navLinks.map((data) => (
              <NavLink
                to={data.link}
                key={data.id}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-2 transition-all border-b-btnColor text-btnColor"
                      : "text-black opacity-60"
                  }`
                }
              >
                <li>{data.linkName}</li>
              </NavLink>
            ))}
          </ul>
          <Link to={"cart"} className="relative">
            <GiShoppingCart className="text-xl" />
            <span className="absolute flex justify-center items-center -top-[5px] -right-[8px] bg-btnColor rounded-full h-4 w-4 text-white font-semibold text-[10px]">
              10
            </span>
          </Link>
          <div>
            <SignedOut>
              <SignInButton className="bg-btnColor px-3 py-1 rounded-sm text-white cursor-pointer shadow shadow-[#00000078]" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full ">
          <ul className="flex flex-col gap-4 py-5 container">
            {navLinks.map((data) => (
              <NavLink
                to={data.link}
                key={data.id}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-btnColor font-semibold"
                      : "text-black opacity-70"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <li>{data.linkName}</li>
              </NavLink>
            ))}
            <Link
              to={"cart"}
              className="flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <GiShoppingCart className="text-xl" />
              <span className="text-sm">Cart (10)</span>
            </Link>
            {/* <div>
              <SignedOut>
                <SignInButton className="bg-btnColor px-3 py-1 rounded-sm text-white cursor-pointer shadow shadow-[#00000078]" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div> */}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
