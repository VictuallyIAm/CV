import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Notiflix from 'notiflix'

const Contact = () => {
  const form = useRef()
  const applyCustomer = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_321usp4',
        'template_ju3q8q5',
        form.current,
        'Qy5EvY0m13ER3oFiB'
      )
      .then(
        (result) => {
          Notiflix.Notify.success('I received your message!')
        },
        (error) => {
          console.log(error.message)
        }
      )
    e.target.reset()
  }
  return (
    <>
      <section className="z-20 relative ">
        <div className="z-30 relative flex flex-col justify-center items-center bg-black bg-opacity-100 h-screen">
          <h1 className="text-white text-3xl font-semibold mb-8">CONTACT ME</h1>
          <div className="w-1/2 my-0 ">
            <form ref={form} onSubmit={applyCustomer}>
              <div className="flex flex-col justify-center">
                <input
                  className="my-3 p-1 bg-transparent text-lg text-white border-b-2 focus:outline-none"
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                />
                <input
                  className="my-3 p-1 bg-transparent text-lg text-white border-b-2 focus:outline-none"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                />
                <input
                  className="my-3 p-1 bg-transparent text-lg text-white border-b-2 focus:outline-none"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <textarea
                  className="my-3 p-1 bg-transparent text-lg text-white border-b-2 focus:outline-none"
                  type="text"
                  name="message"
                  placeholder="Your message"
                  required
                />
                <button
                  className="m-4 px-5 py-2 text-white text-lg font-light bg-sky-600 rounded-xl"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
