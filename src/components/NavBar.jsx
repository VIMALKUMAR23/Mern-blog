import { Button, Navbar, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { Link ,useLocation} from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
function NavBar() {
  const path=useLocation().pathname;
  return (
    <>
  <Navbar className=' border-b-2'>
    <Link className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
     <span className='px-2 py-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-lg text-white '>Dev</span>
    Blog
    </Link>

   <form>
    <TextInput
    type='text'
    placeholder='Search...'
    rightIcon={AiOutlineSearch}
    className=' hidden lg:inline'
    />

   </form>
   <Button className='w-12 h-10 lg:hidden justify-center items-center' color='gray' pill>
      <AiOutlineSearch/>
    </Button>
    <div className=' flex gap-2 md:order-2'>
      <button  className='w-12 h-10 hidden sm:inline' color='gray' pill>
      <FaMoon />
      </button>
      <Link to='/sign-in'>
      <Button gradientDuoTone='purpleToBlue' color='gray'>
        Sign In
      </Button>
      </Link>
      <NavbarToggle/>
    </div>
      <Navbar.Collapse >
        <Navbar.Link active={path === "/"} as={"dev"}>
          <Link to='/'>
          Home
          </Link>
        </Navbar.Link  >
        <Navbar.Link active={path === "/Dashboard"} as={"dev"}>
          <Link to='/Dashboard'>
          Dashboard
          </Link>
        </Navbar.Link>
        <Navbar.Link  active={path === "/signIn"} as={"dev"}>
          <Link to='/signIn'>
          signIn
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
  </Navbar>
    </>
  )
}

export default NavBar
