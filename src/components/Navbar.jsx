import React from 'react'
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";


const Navbar = ({ toggleMode, dark}) => {
  return (
    <div>
      <h1 className='text-3xl m-4'>Questions</h1>
      <nav className={dark ? 'bg-slate-800 text-white' : 'bg-white text-black'}>
        <button onClick={toggleMode}>
          {dark ? <MdOutlineLightMode/> : <MdOutlineDarkMode/>}
        </button>
      </nav>
    </div>
  )
}
 
export default Navbar