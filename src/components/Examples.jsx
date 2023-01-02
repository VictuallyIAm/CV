import React, { useRef, useState } from 'react'
import beatsite from '../data/beatsite.png'
import schoolsite from '../data/schoolsite.png'
import plagsite from '../data/plagsite.png'

const Examples = () => {
  return (
    <>
      <h1 className="text-3xl text-center my-6 pt-14 font-bold ">PROJECTS</h1>
      <h1 className="text-xl text-center my-16 font-semibold px-20">
        And the most interesting part. You are here for this, right? The
        examples. Only 3 of them actually. I hope that's enough for us to become
        colleagues.
      </h1>
      <div className="flex flex-wrap md:justify-center">
        <div className="border-zinc-200 border-1 bg-gray-200  w-full mx-4 mb-3 mt-0  rounded text-black p-2 flex justify-start md:flex-col ">
          <div className="p-3 z-20 w-96">
            <img src={beatsite} className="rounded" alt="logo" />
          </div>
          <div className="mx-4 flex flex-col  justify-start items-start">
            <div className="text-3xl font-bold border-b-2">
              Baby Montaigne Beats Web-site
            </div>
            <div className="my-4 text-left">
              This is an app for music producer, which allow admin to manage
              content, take payments and track orders. You can just listen some
              mucis there. And... it is actually not responsive :(
            </div>
            <a
              href="https://victuallyiam.github.io/beat-app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-10 py-2 border-2 bg-sky-500 rounded-xl">
                Visit
              </button>
            </a>
          </div>
        </div>
        <div className="border-zinc-200 border-1 bg-gray-200  w-full mx-4 mb-3 mt-0  rounded text-black p-2 flex justify-start md:flex-col ">
          <div className="mx-4 flex flex-col  justify-start items-end">
            <div className="text-3xl font-bold border-b-2">
              Koremoon school web-site
            </div>
            <div className="my-4 text-right">
              한국어를 배우세요? If you want to learn korean language you can
              actually contact those guys. Allows visitors to apply for a lesson
              and admin to manage some stuff, connected to courses' issues.
              Responsive (check from your phone^^)
            </div>
            <a
              href="https://victuallyiam.github.io/school-app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-10 py-2 border-2 bg-sky-500 rounded-xl">
                Visit
              </button>
            </a>
          </div>
          <div className="p-3 z-20 w-96">
            <img src={schoolsite} className="rounded" alt="logo" />
          </div>
        </div>
        <div className="border-zinc-200 border-1 bg-gray-200  w-full mx-4 mb-3 mt-0  rounded text-black p-2 flex justify-start md:flex-col ">
          <div className="p-3 z-20 w-96">
            <img src={plagsite} className="rounded" alt="logo" />
          </div>
          <div className="mx-4 flex flex-col  justify-start items-start">
            <div className="text-3xl font-bold border-b-2">
              E-commerce and news <applet></applet>
            </div>
            <div className="my-4 text-left">
              Here you can find out some info about the company and order some
              stuff. I also added some fun things with overflow. Nothing
              serious, just check it out. Dont forget to try it on your phone as
              well...
            </div>
            <a
              href="https://victuallyiam.github.io/plague-app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-10 py-2 border-2 bg-sky-500 rounded-xl">
                Visit
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Examples
