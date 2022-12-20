import React, { useRef, useState } from 'react'
import Footer from './Footer'
import About from '../components/About'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Examples from '../components/Examples'
import { Link } from 'react-router-dom'
import banner from '../data/banner.jpg'
import { FaInstagramSquare, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const MainLayout = () => {
  const [scroll, setScroll] = useState(false)
  const fixNavbar = () => {
    if (window.scrollY > 60) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  window.addEventListener('scroll', fixNavbar)

  const about = useRef()
  const scrollToAbout = () => {
    about.current.scrollIntoView({ behavior: 'smooth' })
  }
  const skills = useRef()
  const scrollToSkills = () => {
    skills.current.scrollIntoView({ behavior: 'smooth' })
  }
  const examples = useRef()
  const scrollToExamples = () => {
    examples.current.scrollIntoView({ behavior: 'smooth' })
  }
  const contact = useRef()
  const scrollToContact = () => {
    contact.current.scrollIntoView({ behavior: 'smooth' })
  }
  const nav = useRef()
  const scrollToNav = () => {
    nav.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <div
        className={
          scroll
            ? 'flex fixed bg-white z-30 opacity-100 w-full border-b-1 border-b-slate-400 p-1'
            : 'flex fixed z-30 opacity-100 w-full border-b-1 border-b-slate-400 p-1'
        }
      >
        <div className="m-1 sm:mx-0">
          <Link>
            <span className="flex text-black sm:hidden">
              <p className="mx-3 text-2xl my-1 font-bold">VictuallyIAm</p>
            </span>
          </Link>
        </div>
        <div className=" w-screen flex justify-center ">
          <nav className=" w-full text-lg text-black-100">
            <div className=" flex flex-row justify-center align-middle mx-3 sm:mx-0">
              <div className="cursor-pointer border-r-2 border-l-2 p-2 sm:border-l-0 px-4 border-r-slate-50 border-l-slate-50 hover:text-slate-500 ">
                <p
                  onClick={scrollToAbout}
                  className="hover:translate-y-1 transition-transform"
                >
                  About
                </p>
              </div>
              <div className="cursor-pointer border-r-2  p-2  px-4 border-r-slate-50 hover:text-slate-500">
                <p
                  className="hover:translate-y-1 transition-transform"
                  onClick={scrollToSkills}
                >
                  Skills
                </p>
              </div>
              <div className="cursor-pointer border-r-2  p-2 px-4 border-r-slate-50  hover:text-slate-500">
                <p
                  className="hover:translate-y-1 transition-transform"
                  onClick={scrollToExamples}
                >
                  Examples
                </p>
              </div>
              <div className="cursor-pointer border-r-2  p-2 px-4 border-r-slate-50  hover:text-slate-500">
                <p
                  className="hover:translate-y-1 transition-transform"
                  onClick={scrollToContact}
                >
                  Contact
                </p>
              </div>
              <div className="cursor-pointer border-r-2  p-2 px-4 border-r-slate-50  hover:text-slate-500 sm:hidden">
                <a
                  href="https://github.com/VictuallyIAm/my-cv-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="hover:translate-y-1 transition-transform">
                    View on gitHub
                  </p>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex justify-between mx-3 my-2 sm:hidden">
          <span className="mx-1">
            <a
              href="https://www.instagram.com/victuallyiam/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare size={30} />
            </a>
          </span>
          <span className="mx-1">
            <a
              href="https://t.me/VictuallyIAm"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram size={30} />
            </a>
          </span>
          <span className="mx-1">
            <a
              href="https://www.linkedin.com/in/viktorbeketov"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </span>
        </div>
      </div>
      <div ref={nav} className="h-screen">
        <img
          src={banner}
          className="h-screen w-screen absolute z-10 opacity-70"
          alt="banner"
        />
        <div className="relative z-20 top-36 right-80  flex flex-col items-end md:right-40 sm:right-4 sm:top-20">
          <h2 className="text-3xl font-semibold">Developed by</h2>
          <h1 className="text-6xl font-bold my-6">VIKTOR BEKETOV</h1>
          <button
            onClick={scrollToAbout}
            className="px-6 py-3 my-4 text-white text-xl rounded-full bg-back-black hover:bg-white animate-bounce hover:animate-none hover:text-back-black"
          >
            Let's hook up
          </button>
        </div>
      </div>
      <div ref={about}>
        <About />
      </div>
      <div ref={skills}>
        <Skills />
      </div>
      <div ref={examples}>
        <Examples />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
      <Footer />
      {scroll ? (
        <button
          onClick={scrollToNav}
          className="fixed bottom-9 p-1 text-xl right-9 bg-white border-2 rounded-full z-50"
        >
          <BsFillArrowUpCircleFill size={50} />
        </button>
      ) : null}
    </>
  )
}

export default MainLayout
