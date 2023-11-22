import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
    //<BsFillMoonStarsFill />
    //<MdOutlineLightMode />
  return (
    <section>
        <h1 className='ml-0 p-3 text-2xl font-semibold'>Question Form</h1>
        <nav className='flex justify-center items-center'>
            <NavLink to='/about'>About</NavLink>
        </nav>
    </section>
  )
}

export default Navbar