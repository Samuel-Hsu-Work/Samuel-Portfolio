import React from 'react';
import {motion, useReducedMotion} from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi';
import { BsPerson, BsChatDots } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';

function Contact() {
    const reduced = useReducedMotion();

    return (
      <motion.section
      initial={reduced ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: reduced ? 0.01 : 0.5, ease: "easeOut" } }}
      exit={{ opacity: 0, transition: { duration: reduced ? 0.01 : 0.3, ease: "easeIn" } }}
      name='contact'
      className='current-page w-full min-h-screen flex justify-center items-center px-4 sm:px-6 py-16 sm:py-20 md:py-24'>

        <div className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8 text-center'>
            <h1 tabIndex={-1} className='text-4xl sm:text-5xl md:text-6xl font-bold'>Get In Touch</h1>
            <p className='py-4 text-base sm:text-lg' style={{color: 'var(--muted-text-color)'}}>
              Have a question or want to work together? Feel free to reach out.
            </p>
            <a
              href='mailto:samuelhsu.work@gmail.com'
              className='inline-flex items-center gap-2 text-base sm:text-lg font-medium underline hover:scale-105 transition-all duration-300 max-w-full'
              style={{color: 'var(--link-color)'}}
            >
              <HiOutlineMail size={20} aria-hidden="true" focusable="false" className='flex-shrink-0' />
              <span style={{overflowWrap: 'anywhere'}}>samuelhsu.work@gmail.com</span>
            </a>
          </div>

          <form
            method='post'
            action="https://getform.io/f/c8bc4018-ec0f-41f6-9cde-1d8d84f60b56"
            className='flex flex-col gap-4'
          >
            <div>
              <label htmlFor='contact-name' className='block text-sm font-medium mb-1' style={{color: 'var(--text-color)'}}>
                Your Name
              </label>
              <div className='relative'>
                <BsPerson className='absolute top-3 left-3' style={{color: '#999'}} size={20} aria-hidden="true" focusable="false" />
                <input
                  id='contact-name'
                  className='w-full p-3 pl-10 rounded-lg border transition-all duration-300'
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    borderColor: 'var(--control-border-color, #767676)',
                  }}
                  type="text"
                  placeholder='Jane Doe'
                  name='name'
                  autoComplete='name'
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor='contact-email' className='block text-sm font-medium mb-1' style={{color: 'var(--text-color)'}}>
                Your Email
              </label>
              <div className='relative'>
                <HiOutlineMail className='absolute top-3 left-3' style={{color: '#999'}} size={20} aria-hidden="true" focusable="false" />
                <input
                  id='contact-email'
                  className='w-full p-3 pl-10 rounded-lg border transition-all duration-300'
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    borderColor: 'var(--control-border-color, #767676)',
                  }}
                  type="email"
                  placeholder='jane@example.com'
                  name='email'
                  autoComplete='email'
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor='contact-message' className='block text-sm font-medium mb-1' style={{color: 'var(--text-color)'}}>
                Your Message
              </label>
              <div className='relative'>
                <BsChatDots className='absolute top-3 left-3' style={{color: '#999'}} size={20} aria-hidden="true" focusable="false" />
                <textarea
                  id='contact-message'
                  className='w-full p-3 pl-10 rounded-lg border transition-all duration-300'
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    borderColor: 'var(--control-border-color, #767676)',
                  }}
                  name="message"
                  rows="8"
                  placeholder='How can I help?'
                  required
                />
              </div>
            </div>

            <button
              type='submit'
              className='flex items-center justify-center gap-2 bg-white text-gray-700 font-bold text-lg rounded-lg px-6 py-3 mt-2 hover:scale-105 transition-all duration-300 shadow-md'
            >
              <FiSend size={18} aria-hidden="true" focusable="false" />
              Send Message
            </button>
          </form>
        </div>
      </motion.section>
    );
  }

  export default Contact;
