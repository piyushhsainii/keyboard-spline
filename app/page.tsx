"use client"
import { useScroll , motion , useTransform } from 'framer-motion';
import React, { Fragment, Suspense, useEffect, useRef, useState } from 'react';
const Spline = React.lazy(()=>import('@splinetool/react-spline'))
import Lenis from '@studio-freight/lenis'
import { useMediaQuery } from '@mui/material';
import { Typewriter , Cursor } from 'react-simple-typewriter'; 

export default function App() {

  const ref = useRef<any>(null);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const isDesktop = useMediaQuery('(min-width:768px)')
  console.log(isDesktop)
  useEffect(() => {
    function handleResize() {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    handleResize(); // Set initial dimensions
    window.addEventListener('resize', handleResize); // Add resize event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on component unmount
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref.current,
    offset: [0, 0.43]
  });

  const yPos = isDesktop ? useTransform(scrollYProgress, [0, 1], [0, 650  ]) : useTransform(scrollYProgress, [0, 1], [0, 0])
  const xPos = isDesktop ? useTransform(scrollYProgress, [0, 1], [0, 430  ]) : useTransform(scrollYProgress, [0, 1], [0, 0])

  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on('scroll', (e: any) => {
    //   console.log(e);
    // });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
   <div>
      {
         <Fragment>
           <div className={` flex w-[1200px] h-screen justify-center m-auto  border border-white flex-wrap overflow-visible `}
           >
               <motion.div className='border border-yellow-400 w-[100%] md:w-[65%] h-[90vh] overflow-visible ' 
               style={{ y: yPos, x: xPos }}
                 >
                  <Suspense fallback={<div className='text-white'>Loading...</div>}>
                 {/* <Spline ref={ref}   className='border    border-red-300 cursor-grab ' 
                  scene="https://prod.spline.design/u8kMnjIBlBR9eCSO/scene.splinecode" /> */}
                  </Suspense>
               </motion.div>
               <div className='w-[1200px] m-auto md:w-[35%] h-auto'>
                <div className='w-[400px] text-slate-200 text-7xl font-bold p-2 ml-16 m-4 flex flex-col gap-3 justify-center  ' >
                    <div>ELEVATE </div> 
                    <div>YOUR</div> 
                    <div>INPUTS</div>
                </div>
               </div>
           </div>
             <div className='w-[1200px] m-auto h-[100vh] m-au ' >

                <div className='w-[400px] mt-6 text-slate-200 text-6xl font-bold p-2 ml-16 m-4 flex flex-col gap-6 justify-center  ' >
                    <div>TYPE </div> 
                    <div>SMARTER,</div>
                    <div>NOT </div> 
                    <div>HARDER</div>
                 </div>
                  <div className='p-2 ml-14'> <Typewriter typeSpeed={60} words={[`PRESS ANY KEY TO TYPE`, 'TYPE AND TEST OUR KEYBOARD']} loop={false} /> </div>
             </div>
             <div className='w-[1200px] h-[100vh] ' >
               section 2
             </div>
         </Fragment>
     
      }
   </div>
  );
}
