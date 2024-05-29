import React from 'react'
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';


const Navbar = ({ toggleMode, dark}) => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/question-form'>Question Form</Link>
      <Link to='/question-list'>Question List</Link>
      <Link to='/form'>Q-Form</Link>
      <nav className={dark ? 'bg-slate-800 text-white' : 'bg-white text-black'}>
        <button onClick={toggleMode}>
          {dark ? <MdOutlineLightMode/> : <MdOutlineDarkMode/>}
        </button>
      </nav>
    </div>
  )
}
 
export default Navbar