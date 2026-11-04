import React, { useState } from 'react';
import {motion, useReducedMotion} from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi';
import { BsPerson, BsChatDots } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';
import './Contact.css';

export const CONTACT_FORM_ENDPOINT = "https://getform.io/f/c8bc4018-ec0f-41f6-9cde-1d8d84f60b56";

const SUBMISSION_MESSAGES = {
  succeeded: "Thanks! Your message was sent. I'll get back to you soon.",
  failed: "Sorry, your message couldn't be sent. Please try again or email me directly.",
};

function Contact() {
    const reduced = useReducedMotion();
    // 'idle' | 'submitting' | 'succeeded' | 'failed'
    const [submissionStatus, setSubmissionStatus] = useState('idle');
    const isSubmitting = submissionStatus === 'submitting';

    // Fields are read-only while a request is in flight: FormData is a
    // snapshot taken at send time, so edits made during the request would
    // otherwise be silently wiped by form.reset() on success.
    // Submit in the background so the visitor stays on the site instead of
    // being redirected to the form provider's thank-you page. The form keeps
    // its method/action so it still works as a plain POST if JS fails to load.
    const submitContactForm = async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      setSubmissionStatus('submitting');
      try {
        const response = await fetch(CONTACT_FORM_ENDPOINT, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) {
          throw new Error(`Contact form submission failed with status ${response.status}`);
        }
        form.reset();
        setSubmissionStatus('succeeded');
      } catch {
        setSubmissionStatus('failed');
      }
    };

    return (
      <motion.section
      initial={reduced ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: reduced ? 0.01 : 0.5, ease: "easeOut" } }}
      exit={{ opacity: 0, transition: { duration: reduced ? 0.01 : 0.3, ease: "easeIn" } }}
      name='contact'
      className='current-page w-full min-h-screen flex justify-center items-center px-4 sm:px-6 py-16 sm:py-20 md:py-24'>

        <div className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8 text-center'>
            <h1 tabIndex={-1} className='text-4xl sm:text-5xl md:text-6xl font-bold'>
              <span className='gradient-heading'>Get In Touch</span>
            </h1>
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
            action={CONTACT_FORM_ENDPOINT}
            onSubmit={submitContactForm}
            aria-busy={isSubmitting}
            className='flex flex-col gap-4'
          >
            <div>
              <label htmlFor='contact-name' className='block text-sm font-medium mb-1' style={{color: 'var(--text-color)'}}>
                Your Name
              </label>
              <div className='relative'>
                <BsPerson className='contact-field-icon absolute top-3 left-3' size={20} aria-hidden="true" focusable="false" />
                <input
                  id='contact-name'
                  className='w-full p-3 pl-10 rounded-lg border transition-all duration-300'
                  type="text"
                  placeholder='Jane Doe'
                  name='name'
                  autoComplete='name'
                  required
                  readOnly={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label htmlFor='contact-email' className='block text-sm font-medium mb-1' style={{color: 'var(--text-color)'}}>
                Your Email
              </label>
              <div className='relative'>
                <HiOutlineMail className='contact-field-icon absolute top-3 left-3' size={20} aria-hidden="true" focusable="false" />
                <input
                  id='contact-email'
                  className='w-full p-3 pl-10 rounded-lg border transition-all duration-300'
                  type="email"
                  placeholder='jane@example.com'
                  name='email'
                  autoComplete='email'
                  required
                  readOnly={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label htmlFor='contact-message' className='block text-sm font-medium mb-1' style={{color: 'var(--text-color)'}}>
                Your Message
              </label>
              <div className='relative'>
                <BsChatDots className='contact-field-icon absolute top-3 left-3' size={20} aria-hidden="true" focusable="false" />
                <textarea
                  id='contact-message'
                  className='w-full p-3 pl-10 rounded-lg border transition-all duration-300'
                  name="message"
                  rows="8"
                  placeholder='How can I help?'
                  required
                  readOnly={isSubmitting}
                />
              </div>
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='contact-submit-button flex items-center justify-center gap-2 font-bold text-lg rounded-lg px-6 py-3 mt-2'
            >
              <FiSend size={18} aria-hidden="true" focusable="false" />
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>

            {/* Always rendered so screen readers pick up the live-region update */}
            <p
              role='status'
              className={`contact-submission-status text-center text-base font-medium ${submissionStatus === 'failed' ? 'is-failed' : ''}`}
            >
              {SUBMISSION_MESSAGES[submissionStatus] ?? ''}
            </p>
          </form>
        </div>
      </motion.section>
    );
  }

  export default Contact;
