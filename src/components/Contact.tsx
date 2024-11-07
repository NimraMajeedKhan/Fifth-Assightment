import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";




const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl' data-aos="zoom-in-up">Contact Me</h2>
          <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <IoMdMail size={30} />nk4362@gamil.com
          </div>
          <div className='flex gap-3 items-center' data-aos="zoom-in-up" >
          <FaPhoneAlt size={30} />(031)-32406470
          </div>
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type="text" 
            className='h-[40px] bg-transparent border border-pink-600 rounded-md'
            id='name'/>
          </div>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="text" 
            className='h-[40px] bg-transparent border border-pink-600 rounded-md'
            id='email'/>
          </div>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea 
            className='bg-transparent border border-pink-600 rounded-md'
            id='msg' rows={8}>
            </textarea>
          </div>
          <Button className='bg-pink-600 text-white ' data-aos="zoom-in-up">Send</Button>
        </div>
      </div>
    
    
    </div>

  )
}

export default Contact