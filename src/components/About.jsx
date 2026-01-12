import React from 'react'
import { motion } from "framer-motion"
const About = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    
    className='flex flex-col items-center justify-center 
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id="About">
<h1 className='text-2xl sm:text-4xl font-bold mb-2'>About 
    <span className='underline underline-offset-4 decoration-1 under font-light'> Our Brand</span></h1>
<p className='my-8 max-w-3xl text-center text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
   <img src={"https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg"} alt=""  className='w-full sm:w-1/2 max-w-lg'/>
   <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
<div>
    <p>10+</p>
    <p>Years of Excellence </p>
</div>
<div>
    <p>12+</p>
    <p>Projects Completed </p>
</div>
<div>
    <p>20+</p>
    <p>Mn, Sq Ft. Delivered </p>
</div>
<div>
    <p>25+</p>
    <p>Ongoing Projects</p>
</div>
    </div>
    <p className='my-10 max-w-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolor. Repellendus consequatur explicabo natus sapiente!</p>
  <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
   </div>
    </div>
    </motion.div>
  )
}

export default About