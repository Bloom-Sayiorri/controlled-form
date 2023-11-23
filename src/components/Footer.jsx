import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white p-4 fixed bottom-0 w-full'>
      <p className='h-5 flex justify-center'>You've got questions I have the answers to.</p>
      <p className='flex justify-center items-center gap-2 mt-4'><span><FaRegCopyright /></span> Questions Inc.</p>
    </footer>
  )
}

export default Footer