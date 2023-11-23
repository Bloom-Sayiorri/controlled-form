import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    //
  return (
    <section className='flex justify-center p-3 items-center'>
        <h1 className='mr-0 pr-2 items-center text-2xl font-semibold'>Question Form</h1>
        <nav className='flex justify-end items-center gap-3 ml-4'>
          <MdOutlineLightMode />
          <BsFillMoonStarsFill />
          <NavLink className='text-lg' to='/about'>About</NavLink>
        </nav>
    </section>
  )
}

export default Navbar