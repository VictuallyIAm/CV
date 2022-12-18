import React from 'react'
import { FaInstagramSquare, FaTelegram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <>
      <div className="h-20   bg-black sticky z-100   ">
        <div className="flex py-3 justify-center mx-3 ">
          <span className="mx-1 ">
            <a
              href="https://www.instagram.com/victuallyiam/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare size={30} className="bg-slate-300" />
            </a>
          </span>
          <span className="mx-1">
            <a
              href="https://t.me/VictuallyIAm"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram size={30} className="bg-slate-300" />
            </a>
          </span>
          <span className="mx-1">
            <a
              href="https://www.linkedin.com/in/viktorbeketov"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} className="bg-slate-300" />
            </a>
          </span>
        </div>
        <p className="text-white text-center">{year}</p>
      </div>
    </>
  )
}

export default Footer
