import React, { useState } from 'react'
import { FaAlignRight } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [menuState, setMenuState] = useState(false)
  function toggleMenu() {
    setMenuState(!menuState)
  }
  return (
    <div className=" flex  fixed top-0 w-full justify-between items-center md:px-16 px-4  py-1 shadow-md shadow-slate-200/80 bg-white  backdrop-filter backdrop-blur-lg">
      <img
        src="https://github.com/Sanket-Gawande/growheist-intership/blob/master/landing-page/public/logo-dark.png?raw=true"
        alt="logo"
        className="h-16 w-16"
      />

      <ul
        className={`md:flex md:space-x-6 ${
          menuState ? 'block' : 'hidden'
        } right-0  bg-white/95 md:space-y-0 space-y-8 h-screen md:h-auto text-md px-8 md:px-0 backdrop-filter md:backdrop-filter-none backdrop-blur-lg  w-full top-0  md:flex md:relative md:w-auto md:bg-transparent py-12 md:py-2 fixed justify-center items-center  text-slate-900`}
      >
        <li className="hover:text-red-500 cursor-pointer transition-all">
          Home
        </li>
        <li className="hover:text-red-500 cursor-pointer transition-all">
          Blog
        </li>{' '}
        <li className="hover:text-red-500 cursor-pointer transition-all">
          About
        </li>{' '}
        <li className="hover:text-red-500 cursor-pointer transition-all">
          Events
        </li>
        <li className="hover:text-red-500 cursor-pointer transition-all">
          Contact
        </li>
        <li className="hover:text-red-500 cursor-pointer transition-all bg-red-500 text-white rounded-md text-sm font-semibold  py-2 px-2">
          Search for job
        </li>
        <span
          onClick={() => setMenuState(!menuState)}
          className="text-red-500 md:hidden text-2xl absolute top-0 right-4"
        >
          <AiOutlineClose />
        </span>
      </ul>
      <FaAlignRight
        className="block md:hidden text-2xl text-slate-900"
        onClick={toggleMenu}
      />
    </div>
  )
}

export default Header
