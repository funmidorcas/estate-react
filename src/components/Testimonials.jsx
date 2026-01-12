import React from 'react'
    import { motion } from "framer-motion"

const Testimonials = () => {
   


  return (
    <motion.div 
    initial={{opacity: 0, x:100}}
    transition={{duration:1.5}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    id="Testimonials" className='container  mx-auto py-10 lg:px-32 w-full overflow-hidden '>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer 
          <span className='underline underline-offset-4 decoration-1 under font-light'> Testimonials</span></h1>
     <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from Our Satisfied Clients</p>
   
   {/* testimonial data */}
   <div className='flex flex-wrap justify-center gap-8'>

   <div className='max-w-55 border shadow-lg rounded px-3 py-5 text-center'>
    <img className='w-20 h-20 rounded-full mx-auto mb-4' 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s" alt="dp" />
    <h2 className='text-xl text-gray-700 font-medium'>Mark Luke</h2>
    <p className='text-gray-500 mb-4 text-sm'>Youtuber</p>
    <div className='flex justify-center gap-1 text-red-500 mb-4'>
      {Array.from({ length: 4 }).map((_, index) => (
        <span key={index} className='text-yellow-500'>&#9733;</span>
      ))}
    </div>
    <p className='text-gray-600'>Amazing service! Highly recommended.</p>
   </div>
   <div className='max-w-55 border shadow-lg rounded px-3 py-5 text-center'>
    <img className='w-20 h-20 rounded-full mx-auto mb-4' 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvScVTXSLjNUR3nCxuHbjgvsK8bpcbh33ag&s" alt="" />
    <h2 className='text-xl text-gray-700 font-medium'>John Rose</h2>
    <p className='text-gray-500 mb-4 text-sm'>UI/UX Designer</p>
    <div className='flex justify-center gap-1 text-red-500 mb-4'>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className='text-yellow-500'>&#9733;</span>
      ))}
    </div>
    <p className='text-gray-600'>Good customer service.</p>
   </div>
   {/* <div className='max-w-85 border shadow-lg rounded px-8 py-12 text-center'> */}
       <div className='max-w-55 border shadow-lg rounded px-3 py-5 text-center'>
    <img className='w-20 h-20 rounded-full mx-auto mb-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGdKjrh-Z8L8IgKSN_hbzL2-wd5pPwGq7cg&s" alt="" />
    <h2 className='text-xl text-gray-700 font-medium'>Reed Smith</h2>
    <p className='text-gray-500 mb-4 text-sm'>Doctor</p>
    <div className='flex justify-center gap-1 text-red-500 mb-4'>
      {Array.from({ length: 4 }).map((item, index) => (
        <span key={index} className='text-yellow-500'>&#9733;</span>
      ))}
    </div>
    <p className='text-gray-600'>I love my new home.</p>
   </div>

   {/* hr */}
   </div>
    
    </motion.div>
  )
}

export default Testimonials