import React from 'react'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Projects = () => {
const profile = "./src/assets/roundme.jpg"

const [currentIndex, setCurrentIndex] = useState(0);
const [cardsToShow, setCardsToShow] = useState(1);

const projectData = 8;

const nextProject = ( ) => {
setCurrentIndex((prevIndex) =>
  prevIndex === projectData.length - cardsToShow ? 0 : prevIndex + 1)
}
const prevProject = ( ) => {
setCurrentIndex((prevIndex) =>
  prevIndex === 0 ? projectData.length - cardsToShow : prevIndex - 1)
}

useEffect(() => {
  const updateCardsToShow = () => {
    if (window.innerWidth >= 640) {
      setCardsToShow(projectData.length); 
    } else {
      setCardsToShow(1)
    }
  };
      updateCardsToShow();
  window.addEventListener("resize", updateCardsToShow);

  return () => window.removeEventListener("resize", updateCardsToShow);
}, []);


// const nextProject = ( ) => {
// setCurrentIndex((prevIndex) =>(prevIndex + 1) %  projectData.length);
// }
// const prevProject = ( ) => {
// setCurrentIndex((prevIndex) =>(prevIndex === 0 ? projectData.length - 1 : prevIndex - 1));
// }


  return (
    <motion.div
        initial={{opacity: 0, x:-200}}
        transition={{duration:2}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
       id="Projects" className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects
           <span className='font-light'> Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto '>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
   
   {/* slider button */}
<div className='flex justify-end items-center mb-8'>
     <button onClick={prevProject}
     className='bg-gray-200 rounded-full' aria-label='Previous Projects'>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
</svg>
   </button>
   <button onClick={nextProject}
    className='bg-gray-200 rounded-full' aria-label='Next Projects'>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
</svg>
   </button>
  </div>  

    {/* project slider container */}

    <div className='overflow-hidden'>
      <div className='flex gap-8 transition-transform duration-500 ease-in-out'
       style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >

        <div className='relative shrink-0 w-full sm:w-1/4'>
     <img className='w-full h-auto mb-14' src={"https://images.pexels.com/photos/16791339/pexels-photo-16791339.jpeg"} alt="" />
       <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
 <div className='inline-block bg-white w-3/4 px-4 pyx-2 shadow-md'>
<h2 className='text-xl font-semibold text-gray-800'>Duplex</h2>
 <p className='text-gray-500 text-sm'>$4,000 <span> | </span> Texas</p>
 </div>
       </div>
        </div>

        <div className='relative shrink-0 w-full sm:w-1/4'>
       <img className='w-full h-auto mb-14' src={"https://images.pexels.com/photos/28586202/pexels-photo-28586202.jpeg"} alt="" />
       <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
 <div className='inline-block bg-white w-3/4 px-4 pyx-2 shadow-md'>
<h2 className='text-xl font-semibold text-gray-800'>Duplex</h2>
 <p className='text-gray-500 text-sm'>$5,000 <span> | </span> New York</p>
 </div>
       </div>
        </div>

        <div className='relative shrink-0 w-full sm:w-1/4'>
       <img className='w-full h-auto mb-14' src={"https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg"} alt="" />
       <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
 <div className='inline-block bg-white w-3/4 px-4 pyx-2 shadow-md'>
<h2 className='text-xl font-semibold text-gray-800'>Duplex</h2>
 <p className='text-gray-500 text-sm'>$3,000 <span> | </span> Huston</p>
 </div>
       </div>
        </div>

        <div className='relative shrink-0 w-full sm:w-1/4'>
       <img className='w-full h-auto mb-14' src={"https://images.pexels.com/photos/28652350/pexels-photo-28652350.jpeg"} alt="" />
       <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
 <div className='inline-block bg-white w-3/4 px-4 pyx-2 shadow-md'>
<h2 className='text-xl font-semibold text-gray-800'>Mansion</h2>
 <p className='text-gray-500 text-sm'>$10,000 <span> | </span> Huston</p>
 </div>
       </div>
        </div>

        <div className='relative shrink-0 w-full sm:w-1/4'>
       <img className='w-full h-auto mb-14' src={"https://images.pexels.com/photos/20159461/pexels-photo-20159461.jpeg"} alt="" />
       <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
 <div className='inline-block bg-white w-3/4 px-4 pyx-2 shadow-md'>
<h2 className='text-xl font-semibold text-gray-800'>Mansion</h2>
 <p className='text-gray-500 text-sm'>$30,000 <span> | </span> Huston</p>
 </div>
       </div>
        </div>

        <div className='relative shrink-0 w-full sm:w-1/4'>
       <img className='w-full h-auto mb-14' src={"https://images.pexels.com/photos/26859066/pexels-photo-26859066.jpeg"} alt="" />
       <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
 <div className='inline-block bg-white w-3/4 px-4 pyx-2 shadow-md'>
<h2 className='text-xl font-semibold text-gray-800'>Duplex</h2>
 <p className='text-gray-500 text-sm'>$7,000 <span> | </span> Ottawa</p>
 </div>
       </div>
        </div>

        <div className='relative shrink-0 w-full sm:w-1/4'>
       <img className='w-full h-auto mb-14' src={"https://images.pexels.com/photos/21837102/pexels-photo-21837102.jpeg"} alt="" />
       <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
 <div className='inline-block bg-white w-3/4 px-4 pyx-2 shadow-md'>
<h2 className='text-xl font-semibold text-gray-800'>Duplex</h2>
 <p className='text-gray-500 text-sm'>$8,000 <span> | </span> Lekki</p>
 </div>
       </div>
        </div>

              {/* hr */}

      </div>
      </div>

    </motion.div>
  )
}

export default Projects