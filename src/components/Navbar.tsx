import React from 'react'
import Link from 'next/link';
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-extrabold text-[50px]'>Nimra <span className='text-white'>Khan.</span></div>
            <ul className='gap-10 lg-gap-16 hidden md:flex font-bold'>
                <li className='menulink'><Link href={'#hero'}>Home</Link></li>
                <li className='menulink'><Link href={'#about'}>About</Link></li>
                <li className='menulink'><Link href={'#projects'}>Projects</Link></li>
                <li className='menulink'><Link href={'#skills'}>Skills</Link></li>
                <li className='menulink'><Link href={'#contact'}>Contact</Link></li>
            </ul>
            <TiThMenu className='md:hidden' size={30}/>

            

        </div>
        

    </div>
  )
}

export default Navbar;