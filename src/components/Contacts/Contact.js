import React from 'react';
import {motion} from 'framer-motion'


function Contact() {
    return (
      <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }}
      exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
      name='contact'
      className='current-page w-full min-h-screen flex justify-center items-center p-4 py-24'>

        <form method='post' action="https://getform.io/f/c8bc4018-ec0f-41f6-9cde-1d8d84f60b56" className='flex flex-col max-w-[600px] w-full'>
          <div className='pd-8'>
            <p className='text-5xl font-bold'>Contact</p>
            <p className='py-4 text-3xl'>Email to : samuelhsu.work@outloock.com</p>
          </div>
          <input className='bg-white p-2' type="text" placeholder='Name' name='name'></input>
          <input className='my-4 p-2' bg-white type="email" placeholder='your email' name='name'></input>
          <textarea className='bg-white p-2' name="message" rows="10" placeholder='Message' ></textarea>
          <button className=' border-2 hover:bg-pink-600 hover:border-pink-6oo px-4 py-3 my-8'>submit</button>
        </form>
      </motion.section>
    );
  }

  export default Contact;