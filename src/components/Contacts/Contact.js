import React from 'react';
import {motion} from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi';
import { BsPerson, BsChatDots } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';

function Contact() {
    return (
      <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }}
      exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
      name='contact'
      className='current-page w-full min-h-screen flex justify-center items-center p-4 py-24'>

        <div className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8 text-center'>
            <p className='text-6xl font-bold'>Get In Touch</p>
            <p className='py-4 text-lg' style={{color: 'var(--text-color)', opacity: 0.7}}>
              Have a question or want to work together? Feel free to reach out.
            </p>
            <a
              href='mailto:samuelhsu.work@gmail.com'
              className='inline-flex items-center gap-2 text-lg font-medium hover:scale-105 transition-all duration-300'
              style={{color: '#6DBBFA'}}
            >
              <HiOutlineMail size={20} />
              samuelhsu.work@gmail.com
            </a>
          </div>

          <form
            method='post'
            action="https://getform.io/f/c8bc4018-ec0f-41f6-9cde-1d8d84f60b56"
            className='flex flex-col gap-4'
          >
            <div className='relative'>
              <BsPerson className='absolute top-3 left-3' style={{color: '#999'}} size={20} />
              <input
                className='w-full p-3 pl-10 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2'
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  borderColor: '#ccc',
                }}
                type="text"
                placeholder='Your Name'
                name='name'
              />
            </div>

            <div className='relative'>
              <HiOutlineMail className='absolute top-3 left-3' style={{color: '#999'}} size={20} />
              <input
                className='w-full p-3 pl-10 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2'
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  borderColor: '#ccc',
                }}
                type="email"
                placeholder='Your Email'
                name='email'
              />
            </div>

            <div className='relative'>
              <BsChatDots className='absolute top-3 left-3' style={{color: '#999'}} size={20} />
              <textarea
                className='w-full p-3 pl-10 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2'
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  borderColor: '#ccc',
                }}
                name="message"
                rows="8"
                placeholder='Your Message'
              />
            </div>

            <button
              className='flex items-center justify-center gap-2 bg-white text-gray-700 font-bold text-lg rounded-lg px-6 py-3 mt-2 hover:scale-105 transition-all duration-300 shadow-md'
            >
              <FiSend size={18} />
              Send Message
            </button>
          </form>
        </div>
      </motion.section>
    );
  }

  export default Contact;
