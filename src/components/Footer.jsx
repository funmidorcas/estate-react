import React from 'react'

const Footer = () => {
  return (
   <footer className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id="Footer">
<div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
    <div className='w-full md:w-1/3 mb-8 md:mb-0'>
        <img  className='w-12 h-12 rounded-full'
         src="data:image/png;base64,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" alt="" />
        <p className='text-gray-400 mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, quibusdam quos. Totam sed nemo, aut earum itaque quibusdam repellat nihil.        </p>
    </div>
    <div className='w-full md:w-1/5 mb-8 md:mb-0'>
        <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
        <ul className='flex flex-col gap-2 text-gray-400'>
            <a href="#Header" className='hover:text-white'>Home</a>
            <a href="#About" className='hover:text-white'>About Us</a>
            <a href="#Contact" className='hover:text-white'>Contact us</a>
            <a href="#" className='hover:text-white'>Privacy Policy</a>
        </ul>
    </div>
    <div className='w-full md:w-1/3 '>
        <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
      <p className='text-gray-400 mb-4 max-w-80'> The latest news, articles, and resources, sent to your inbox weekly </p>
    <div className='flex gap-2'>
        <input type="email" placeholder='Enter your email' 
        className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700
         focus:outline-none w-full md:w-auto' />
         <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
    </div>
    </div>
</div>
<div className='mt-10 text-center text-gray-500 border-t border-gray-700 py-4'>
    Copyright 2026 @ Funmitedev. All Right Reserved
</div>

    </footer>
  )
}

export default Footer