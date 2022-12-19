import React, { useRef, useState } from 'react'
import Modal from './Modal/Modal'
import thankYou from '../data/thankYou.gif'
import emailjs from '@emailjs/browser'
import Notiflix from 'notiflix'

const Examples = () => {
  const [modalOneOpen, setModalOneOpen] = useState(false)
  const [modalTwoOpen, setModalTwoOpen] = useState(false)
  const form = useRef()

  const applyFeedback = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_321usp4',
        'template_n5m22uw',
        form.current,
        'Qy5EvY0m13ER3oFiB'
      )
      .then(
        (result) => {
          Notiflix.Notify.success('I received your message!')
          setModalTwoOpen(false)
        },
        (error) => {
          console.log(error.message)
        }
      )
    e.target.reset()
  }

  return (
    <div className="py-10 ">
      <h1 className="my-10 text-5xl text-center font-bold">Was that enough?</h1>
      <div className="flex m-4 py-10 md:flex-col">
        <img
          src={thankYou}
          className="border-1 border-slate-200 rounded-lg shadow-lg shadow-gray-500/100"
          alt="thanks"
        />
        <div>
          <p className="text-xl p-6">
            Please, let me know, if the information here was useful for you. If
            not so, you'll also be offered to leave some feedback for futher
            site improvement!
          </p>
          <div>
            <button
              onClick={() => setModalOneOpen(true)}
              className="m-3 px-12 py-2 text-white bg-sky-500 rounded-full"
            >
              Yes!
            </button>
            <button
              onClick={() => setModalTwoOpen(true)}
              className="m-3 px-12 py-2 text-black bg-yellow-300 rounded-full"
            >
              No
            </button>
          </div>
        </div>
      </div>
      <Modal isModalOpen={modalOneOpen} setIsModalOpen={setModalOneOpen}>
        <p className="text-xl text-white font-semibold p-4">
          Happy to know that!
        </p>

        <button className="m-4 px-12 py-2 text-white bg-sky-500 rounded-full">
          <a href="https://t.me/VictuallyIAm" target="_blank" rel="noreferrer">
            Send me a message
          </a>
        </button>
      </Modal>
      <Modal isModalOpen={modalTwoOpen} setIsModalOpen={setModalTwoOpen}>
        <div>
          <h1 className="text-white  text-3xl text-center pb-6 px-4">
            What else do you want to see here?
          </h1>
          <h1 className="text-white  text-3xl text-center pb-3 px-4">
            I will abide by your feedback!
          </h1>
          <form ref={form} onSubmit={applyFeedback} className="flex flex-col">
            <input
              className="my-2 p-2 bg-black text-white border-0 focus:outline-none"
              placeholder="Your
              name"
              name="name"
              required
            />
            <textarea
              className="my-2 p-2 bg-black text-white border-0 focus:outline-none"
              name="message"
              placeholder="Write whatever you want!"
              cols="30"
              rows="4"
              type="text"
              required
            />
            <button
              type="submit"
              className="m-4 px-12 py-2 text-black bg-yellow-300 rounded-full"
            >
              Send
            </button>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default Examples
