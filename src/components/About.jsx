import React from 'react'
import me from '../data/me.jpg'
import me2 from '../data/me2.jpg'
import me3 from '../data/me3.jpg'
import me4 from '../data/me4.jpg'
import me5 from '../data/me5.jpg'

const About = () => {
  return (
    <>
      <div className="flex flex-col text-center items-center p-10 sm:p-2">
        <div className="w-2/3">
          <h1 className="text-3xl font-bold m-12">LET ME TELL ABOUT MYSELF</h1>
          <p className="text-center my-4">
            Hello, friend! I'm glad that you found a minute for visiting this
            web-site. It means a lot for me. My name is Vitya, I'm 25 years old,
            and I love making some great stuff in the web. I invited you here to
            show, what we can actually do together. Here you can get familiar
            with my skills, watch on my previous project, check out the CV and
            contact me directly, if it is neccesary. Oh, I know you don't have
            time, just get started right now!
          </p>
        </div>
        <div className="flex p-6 justify-center sm:p-0">
          <img
            src={me}
            alt="me"
            className="border-2 w-19/100  border-slate-400 rounded-lg shadow-2xl hover:scale-125"
          />
          <img
            src={me2}
            alt="me"
            className="border-2 w-19/100 border-slate-400 rounded-lg shadow-2xl hover:scale-125"
          />
          <img
            src={me3}
            alt="me"
            className="border-2 w-19/100 border-slate-400 rounded-lg shadow-2xl hover:scale-125"
          />
          <img
            src={me4}
            alt="me"
            className="border-2 w-19/100 border-slate-400 rounded-lg shadow-2xl hover:scale-125"
          />
          <img
            src={me5}
            alt="me"
            className="border-2 w-19/100 border-slate-400 rounded-lg shadow-2xl hover:scale-125"
          />
        </div>
      </div>
    </>
  )
}

export default About
