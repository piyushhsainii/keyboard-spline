"use client"
import Spline from '@splinetool/react-spline';
import { Fragment } from 'react';

export default function App() {
  return (
    <Fragment>
      <div className='w-screen h-screen flex border border-white '
      >
          <Spline className='border  w-[40%] border-red-300 cursor-grab ' 
           scene="https://prod.spline.design/u8kMnjIBlBR9eCSO/scene.splinecode" />
          <div className='w-[60%]'>
            hi
          </div>
      </div>
        <div className='100vh' >

        </div>
    </Fragment>

  );
}