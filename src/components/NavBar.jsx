import { Button, Navbar, NavbarToggle, TextInput } from "flowbite-react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import Proflie from "./Proflie";
function NavBar() {
  const path = useLocation().pathname;
  return (
    <>
      <Navbar className=" border-b-2">
        <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
          <span className="px-2 py-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-sm text-white ">
            Dev
            <span className=" font-extrabold bg-gradient-to-r from-purple-500 via-orange-600y to-red-900  inline-block text-transparent bg-clip-text">
              Blog
            </span>
          </span>
        </Link>

        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className=" hidden lg:inline"
          />
        </form>
        <Button
          className="w-12 h-10 lg:hidden justify-center items-center"
          color="gray"
          pill
        >
          <AiOutlineSearch />
        </Button>
        <div className=" flex gap-2 md:order-2">
          <button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon />
          </button>
          <Link to="/signIn">
            <Button gradientDuoTone="purpleToBlue" color="gray">
              Sign In
            </Button>
          </Link>
          <Proflie/>
          <NavbarToggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"} >
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/Blog"} as={"div"}>
            <Link to="/Blog">Blog</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/About"} as={"div"}>
            <Link to="/About">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/About"} as={"div"}>
            <Link to="/Admin">Admin</Link>
          </Navbar.Link>
        </Navbar.Collapse>
       
      </Navbar>
      
    </>
  );
}

export default NavBar;
