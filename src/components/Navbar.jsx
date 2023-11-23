import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    //
  return (
    <section className='flex justify-between p-3 items-center'>
        <NavLink to='/'>
          <h1 className='items-center text-2xl font-semibold'>Questions</h1>
        </NavLink>
        <nav className='flex justify-end items-center gap-3 p-2'>
          <MdOutlineLightMode />
          <BsFillMoonStarsFill />
          <NavLink className='text-lg' to='/about'>About</NavLink>
        </nav>
    </section>
  )
}

export default Navbar