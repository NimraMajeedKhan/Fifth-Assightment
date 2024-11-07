import React from 'react'
import Navbar from './Navbar';

const Hero = () => {
  return (
  
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/profile.jpg)] bg-left lg:bg-[15%] bg-cover '
    style={{backgroundSize:"35%"}}
    >
       <Navbar /> 
       <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[90px] sm:text-[70px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up"><span className='text-white'>Hi</span>,</p>
            <p data-aos="zoom-in-up">I<span className='text-white'>'</span>m Nimra <span className='text-white'>Khan</span></p>
            <p data-aos="zoom-in-up">a <span className='text-white'>Fronted</span> Devolper</p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Hero;