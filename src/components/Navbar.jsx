import React, { useState } from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [dark, setDark] = useState(false)

    const lightMode = () => {
      if (dark === true) {
        setDark(true);
      }
      return;
    }

    const darkMode = () => {
      if (!dark){
        setDark(false);
      }
      return;
    }

  return (
    <section className='flex justify-between p-3 items-center'>
        <NavLink to='/'>
          <h1 className='items-center text-2xl font-semibold'>Questions</h1>
        </NavLink>
        <nav className='flex justify-end items-center gap-3 p-2'>
          <button onClick={lightMode}><MdOutlineLightMode /></button>
          <button onClick={darkMode}><BsFillMoonStarsFill /></button>
        </nav>
    </section>
  )
}

export default Navbar