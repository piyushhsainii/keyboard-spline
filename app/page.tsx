"use client"
import { useScroll, motion, useTransform } from 'framer-motion';
import React, { Fragment, Suspense, useEffect, useRef, useState } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'))
import Lenis from '@studio-freight/lenis'
import { useMediaQuery } from '@mui/material';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import { Instagram } from 'lucide-react';
import Navbar from './Navbar';
import Image from 'next/image';

export default function App() {

  const ref = useRef<any>(null);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [Values, setValues] = useState(620)
  const [Values2, setValues2] = useState(430)
  const isDesktop = useMediaQuery('(min-width:768px)')
  const { scrollYProgress } = useScroll({
    target: ref.current,
    offset: [0, 0.43]
  });
  let yPos
  yPos = useTransform(scrollYProgress, [0, 1], [10, 570])


  let xPos
  xPos = useTransform(scrollYProgress, [0, 1], [-200, 205])


  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
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
  return (
    <div className='overflow-x-hidden'>
      {
        <Fragment>
          <Navbar />
          <div className={` flex w-[1200px] h-screen  justify-center m-auto  flex-wrap overflow-visible `}
          >
            <motion.div
              className="w-[950px]  max-h-[800px] h-[90vh]  relative overflow-visible "
              style={{ y: yPos, x: xPos }}
            >
              <Suspense fallback={<div className='text-white'>Loading...</div>}>
                {/* <Spline
                  ref={ref}
                  className='cursor-grab'
                  scene="https://prod.spline.design/u8kMnjIBlBR9eCSO/scene.splinecode"
                /> */}
                <Spline
                  ref={ref}
                  className='cursor-grab'
                  // scene="https://prod.spline.design/u8kMnjIBlBR9eCSO/scene.splinecode"
                  scene="https://prod.spline.design/u8kMnjIBlBR9eCSO/scene.splinecode"
                // scene="https://prod.spline.design/hExGPV-g25fTHBaA/scene.splinecode"
                />
              </Suspense>
            </motion.div>
            <div className='w-[1200px] m-auto md:w-[35%] absolute right-0 mt-36'>
              <div className=' text-center md:text-start md:w-[400px] tracking-wide leading-12  text-slate-200 text-7xl font-extralight p-2 ml-16 m-4  flex flex-col gap-3 justify-center  ' >
                <div>ELEVATE </div>
                <div>YOUR</div>
                <div>INPUTS</div>
              </div>
            </div>
          </div>
          <div className='  h-[40vh]   ' >

            <div className='w-[200px] mt-52 md:mt-6 text-slate-200 text-6xl font-extralight p-2  text-start flex flex-col gap-6 justify-center  m-auto md:ml-16  ' >
              <div>TYPE </div>
              <div>SMARTER,</div>
              <div>NOT </div>
              <div>HARDER</div>
            </div>
            <div className='p-2 w-[400px] font-extralight m-auto md:ml-14'>
              <Typewriter typeSpeed={60} words={[`PRESS W,A,S,D KEY TO TYPE`, 'TYPE AND TEST OUR KEYBOARD']} loop={false} /> </div>
          </div>
          <div className=' h-[20vh] mt-[14rem] md:h-[40vh] m-auto flex justify-center text-slate-200  ' >
            <div  >
              <div className='text-3xl  text-center mt-16'>Velocity </div>
              <div className='text-lg text-center text-slate-400'  >ELEVATE YOUR INPUT </div>
              <div className='text-[12px] mt-5 text-center text-slate-400'  >2023 all Right Reserved Term of use Velocity</div>
              <div className='text-[12px] mt-5 text-center text-slate-400 flex justify-center gap-5'  >
                <img src="/github.png" alt="" />
                <img src="/insta.png" alt="" />
                <img src="/linkedin.png" alt="" />
              </div>
            </div>
          </div>
        </Fragment>

      }
    </div>
  );
}
