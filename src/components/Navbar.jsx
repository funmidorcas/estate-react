import React from "react"
import { useEffect, useState } from "react"
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'


const Navbar = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);

useEffect(() => {
 if(isMenuOpen){
  document.body.style.overflow = 'hidden'
 }else{
  document.body.style.overflow = 'auto'
 }
 return () => {
  document.body.style.overflow = 'auto'
 }
}, [isMenuOpen]);


  return (
    <div className="absolute top-0 left-0 w-full z-10">
<nav className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
   <div className="flex gap-1.25">
    <img className="w-12.5 border-white rounded-full"
         src="data:image/png;base64,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" alt="" />
    <h2 className="my-3">Funmitedev</h2>
    </div>
   <ul className="hidden m-3 md:flex text-white gap-12.5">
    
      <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
      <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
      <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
      <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
   </ul>
   <button className="hidden md:block bg-white px-8 py-2 cursor-pointer hover:border-2 hover:border-white hover:bg-transparent rounded-full">Sign Up</button>
  <button className="text-white md:hidden w-7" onClick={()=>setIsMenuOpen(true)}>
       <FaBars size={24} />
    </button>
  </nav>       
        {/* mobile menu  */}

{/* <div className={`md:hidden ${isMenuOpen ? 'fixed w-full' : 'h-0 w-0 '} 
 right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
  <button onClick={()=>setIsMenuOpen(false)} className="cursor-pointer flex justify-end p-4">
    <FaTimes size={20} className="absolute text-gray-700 right-10 " />
  </button>
  <ul className="flex flex-col items-center gap-2 mt-10 px-5 text-lg font-medium">
    <a href="#Header" className="px-4 py-2 rounded-full inline-block">Home</a>
    <a href="#About" className="px-4 py-2 rounded-full inline-block">About</a>
    <a href="#Projects" className="px-4 py-2 rounded-full inline-block">Projects</a>
    <a href="#Testimonials" className="px-4 py-2 rounded-full inline-block">Testimonials</a>
  </ul>
</div> */}


{isMenuOpen && (
  <div className="fixed inset-0 bg-white z-50 md:hidden transition-all">
    <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 text-gray-700">
      <FaTimes size={24} />
    </button>
    <ul className="flex flex-col items-center gap-2 mt-16 text-lg font-medium">
      <a onClick={() => setIsMenuOpen(false)} href="#Header" className="px-4 py-2 rounded-full">Home</a>
      <a onClick={() => setIsMenuOpen(false)} href="#About" className="px-4 py-2 rounded-full">About</a>
      <a onClick={() => setIsMenuOpen(false)} href="#Projects" className="px-4 py-2 rounded-full">Projects</a>
      <a onClick={() => setIsMenuOpen(false)} href="#Testimonials" className="px-4 py-2 rounded-full">Testimonials</a>
    </ul>
  </div>
)}

    </div>
  )
}

export default Navbar